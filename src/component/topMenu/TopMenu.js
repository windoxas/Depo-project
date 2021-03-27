import React,{useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import ColumnOne from '../columns/columnOne/ColumnOne'
import ColumnTwo from '../columns/columnTwo/ColumnTwo'
import "./TopMenu.css"

const fetching = fetch('http://localhost:3004/menu').then(response => response.json())

function TopMenu (){
    const [menu, setMenu] = useState([])



    useEffect(() => {
            fetching.then(json => setMenu(json))
    }, [])


    return(

        <div>
                    <div className="top_menu">
                    <nav>
                        <ul>
                            {menu.map(item => {
                                return <li key={item.id}>
                                    <Link  to={item.url} >{item.name}</Link>
                                </li>
                            })}
                            <button className="dop_service">Доп.Услуги</button>
                        </ul>
                    
                    </nav>
                
            </div>

            <Switch>
                <Route path="/columnOne" component={ColumnOne}/>
                <Route exact path="/columnTwo" component={ColumnTwo}/>
            </Switch>
        </div>
    

    )
}


export default TopMenu
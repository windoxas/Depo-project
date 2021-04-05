import React,{useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import ColumnEight from '../columns/ColumnEight/ColumnEight'
import ColumnFive from '../columns/ColumnFive/ColumnFive'
import ColumnFour from '../columns/ColumnFour/ColumnFour'
import ColumnOne from '../columns/columnOne/ColumnOne'
import ColumnSeven from '../columns/ColumnSeven/ColumnSeven'
import ColumnSix from '../columns/ColumnSix/ColumnSix'
import ColumnThree from '../columns/ColumnThree/ColumnThree'
import ColumnTwo from '../columns/columnTwo/ColumnTwo'
import ColumnTen from '../columns/ColumnTen/ColumnTen'
import ColumnNine from '../columns/ColumnNine/ColumnNine'
import "./TopMenu.css"
import ColumnEleven from '../columns/ColumnEleven/ColumnEleven'

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
                <Route exact path="/columnThree" component={ColumnThree}/>
                <Route exact path="/columnFour" component={ColumnFour}/>
                <Route exact path="/columnFive" component={ColumnFive}/>
                <Route exact path="/columnSix" component={ColumnSix}/>
                <Route exact path="/columnSeven" component={ColumnSeven}/>
                <Route exact path="/columnEight" component={ColumnEight}/>
                <Route exact path="/columnNine" component={ColumnNine}/>
                <Route exact path="/columnTen" component={ColumnTen}/>
                <Route exact path="/columnEleven" component={ColumnEleven}/>
                
            </Switch>
        </div>
    

    )
}


export default TopMenu
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./TopMenu.css"

const fetching = fetch('http://localhost:3004/menu').then(response => response.json())

function TopMenu (){
    const [menu, setMenu] = useState([])



    useEffect(() => {
            fetching.then(json => setMenu(json))
    }, [])


    return(

        <div className="top_menu">
                <nav>
                    <ul>
                         {menu.map(item => {
                             return <li key={item.id}> <Link  to={item.url} />{item.name}</li>
                         })}
                         <button className="dop_service">Доп.Услуги</button>
                    </ul>
                  
                </nav>
               
        </div>

    )
}


export default TopMenu
import React,{useState, useEffect} from 'react'
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
                        {menu.map((menu) => {
                             return <li key={menu.id}>{menu.name}</li>
                         })}
                         <button className="dop_service">Доп.Услуги</button>
                    </ul>
                </nav>

        </div>
    )
}


export default TopMenu
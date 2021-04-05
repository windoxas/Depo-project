import React from 'react'
import Trains from '../../../Trains'

function TrainsThree(){
    return(
            <>
                <Trains 
                    Instructions="Хужаев А"
                    TrainNumber="3265" 
                    nameHightPerson={["Чориев Ш", "Чориев Б", "Подмен 1287"]}
                    namePerson = {['Каримов Ж', "Мумокулов Ж", "Под Шониёзов Ак"]}
                    trainModel="2ТЭ10М-3265"
                
                />
                <Trains 
                    Instructions="Хужаев А"
                    TrainNumber="2716" 
                    nameHightPerson={["Рустамов Б", "Дияров Б"]}
                    namePerson = {['Эргашев Р', "Лолаев М"]}
                    trainModel="2ТЭ10М-2716"
                
                />
                <Trains 
                    Instructions="Хужаев А"
                    TrainNumber="1193" 
                    nameHightPerson={["Чориев Р", "Саитов Н"]}
                    namePerson = {['Ахмедов Аз', "Назаров Г"]}
                    trainModel="2ТЭ10М-1193"
                
                />
                <Trains 
                    Instructions="Хужаев А"
                    TrainNumber="1265" 
                    nameHightPerson={["Алихонов Ш", "Шаймарданов О"]}
                    namePerson = {['Алабердиев Ф', "Зияев Ф"]}
                    trainModel="UzTE16M-021"
                
                />
            </>
    )
}


function ColumnThree(){
    return(
        <>
            <TrainsThree/>
        </>
       
    )
}

export default ColumnThree
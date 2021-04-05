import React from 'react'
import Trains from '../../../Trains'

function TrainsFive(){
    return(
            <>
                <Trains 
                    Instructions="Дусов У"
                    TrainNumber="0210/0211" 
                    nameHightPerson={["Каримжонов У", "Тулбоев М", "Бозоров Д","Шералиев Кув","Ишкуватов Р","Мадиев У"]}
                    namePerson = {['Зиядулаев Х', "Баратов Б", "Амонов Х","Жураев Ш","Шоназаров Н","Тошуродов О"]}
                    namePersonTwo = {['Нормаматов У', "Жумаев М", "Хидиров Ак","Садуллаев З","Бозоров Б","Жураев Ак"]}
                    trainModel="UZEL-0210/0211"
                    boolean={true}
                
                />
                <Trains 
                    Instructions="Дусов У"
                    TrainNumber="3176" 
                    nameHightPerson={["Рахимов С", "Холмуминов С","Мутафакулов Ж", "Поянов Р"]}
                    namePerson = {['Абдунабиев Ут', "Холниёзов О","Абдуллаев Ш","Халиков Х"]}
                    trainModel="ТЭМ-2-3176"
                
                />

            </>
    )
}


function ColumnFive(){
    return(
        <>
            <TrainsFive/>
        </>
       
    )
}

export default ColumnFive
import React from 'react'
import Trains from '../../../Trains'

function TrainsOne(){
    return(
            <>
                <Trains 
                    Instructions="Мамаев Ф"
                    TrainNumber="1158" 
                    nameHightPerson={["Садатов Б", "Рузиев Дж"]}
                    namePerson = {['Тогаймуродов', "Хамидбоев Ш"]}
                    trainModel="2ТЭ10М-1158"
                
                />
                <Trains 
                    Instructions="Мамаев Ф"
                    TrainNumber="3662" 
                    nameHightPerson={["Кувандиков А", "Шералиев Кам"]}
                    namePerson = {['Турсунов С', "Рахматов Ш"]}
                    trainModel="2ТЭ10М-3662"
                
                />
            </>
    )
}


function ColumnOne(){
    return(
        <>
            <TrainsOne/>
        </>
       
    )
}

export default ColumnOne
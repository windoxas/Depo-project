import React from 'react'
import Trains from '../../../Trains'

function TrainsTwo(){
    return(
            <>
                <Trains 
                    Instructions="Темиров Х"
                    TrainNumber="3173" 
                    nameHightPerson={["Сапаров С", "Шобиров А", "Ишонкулов А"]}
                    namePerson = {['Уралов Д', "Джураев Шав", "Гиёсиддинов Ж"]}
                    trainModel="2ТЭ10М-3173"
                
                />
                <Trains 
                    Instructions="Темиров Х"
                    TrainNumber="1061" 
                    nameHightPerson={["Хидиров Э", "Курбонов Х", "Мирзоев Али"]}
                    namePerson = {['Баратов Ф', "Хамидов Х","Эргашев Х"]}
                    trainModel="2ТЭ10М-1061"
                
                />
                <Trains 
                    Instructions="Темиров Х"
                    TrainNumber="1074" 
                    nameHightPerson={["Мамаев Ш", "Абдурахмонов Ш"]}
                    namePerson = {['Аннаев Х', "Курбонов Х"]}
                    trainModel="2ТЭ10М-1074"
                
                />
                <Trains 
                    Instructions="Темиров Х"
                    TrainNumber="1265" 
                    nameHightPerson={["Юсупов Б", "Рузиев У", "Уралов А"]}
                    namePerson = {['Файзуллаев Б', "Казакбоев Х","Уроков Ф"]}
                    trainModel="2ТЭ10М-1265"
                
                />
            </>
    )
}


function ColumnTwo(){
    return(
        <>
            <TrainsTwo/>
        </>
       
    )
}

export default ColumnTwo
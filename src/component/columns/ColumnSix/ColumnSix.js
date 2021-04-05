import React from 'react'
import Trains from '../../../Trains'

function TrainsSix(){
    return(
            <>
                <Trains 
                    Instructions="Дусов У"
                    TrainNumber="0207-0209" 
                    nameHightPerson={["Хасанов А", "Давилов У", "Мирзоев Ахм","Якубов Ф","Курбонов У"]}
                    namePerson = {['Миркомилов М', "Аноров А", "Алабердиев Ф","Ёров М","Назаров У"]}
                    namePersonTwo = {['Ахмаджонов Ж', "Кенжаев Ж", "Курбонов З","Аликулов П","Тургунбоев И"]}
                    trainModel="UZEL-0207-0209"
                    boolean={true}
                
                />
                <Trains 
                    Instructions="Дусов У"
                    TrainNumber="0208" 
                    nameHightPerson={["Курбонов Т", "Нормуродов Ж"]}
                    namePerson = {['Абдурахмонов Б', "Раджапов Х"]}
                    trainModel="UZEL-0208"
                
                />

            </>
    )
}


function ColumnSix(){
    return(
        <>
            <TrainsSix/>
        </>
       
    )
}

export default ColumnSix
import React from 'react'
import Trains from '../../../Trains'

function TrainsNine(){
    return(
            <>
                <Trains 
                    Instructions="Мирзоев Б "
                    TrainNumber="473" 
                    nameHightPerson={["Ходжамкулов К", "Абдурахмонов А","Холмуродов Н","Ахмедов С"]}
                    namePerson = {['Казаков Ж', "Чориев Ис", "Мирзоев Ан", "Халиков У"]}
                    trainModel="ТЭМ-2-473" 
                />
                <Trains 
                    Instructions="Мирзоев Б "
                    TrainNumber="3088" 
                    nameHightPerson={["Тураев Б", "Казакбоев Ик","Казакбаев Ис","Бозоров У"]}
                    namePerson = {['Гаппаров А', "Гулбоев Ф", "Чупонов Ж", "Рахматов Л"]}
                    trainModel="ТЭМ-2-3088" 
                />
                <Trains 
                    Instructions="Мирзоев Б "
                    TrainNumber="6607" 
                    nameHightPerson={["Турдиев И", "Умаров А","Мамасоатов А","Шодмонов Ш"]}
                    namePerson = {['Номозов Б', "Мирзоев Б", "Шарипов В", "Рахмонов Н"]}
                    trainModel="ТЭМ-2-6607" 
                />
                <Trains 
                    Instructions="Мирзоев Б "
                    TrainNumber="7055" 
                    nameHightPerson={["Мирзоев З", "Шайкулов Б"]}
                    namePerson = {['Джураев Шок', "Рахмонов Б"]}
                    trainModel="ТЭМ-2-7055" 
                />


            </>
    )
}


function ColumnNine(){
    return(
        <>
            <TrainsNine/>
        </>
       
    )
}

export default ColumnNine
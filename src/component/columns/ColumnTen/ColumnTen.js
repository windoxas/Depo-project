import React from 'react'
import Trains from '../../../Trains'

function TrainsTen(){
    return(
            <>
                <Trains 
                    Instructions="Абрахматов М"
                    TrainNumber="6490" 
                    nameHightPerson={["Махмадалиев Б", "Хоналиев И","Сатторов Й","Баратов М"]}
                    namePerson = {['Менгтураев Д', "Хазраткулов Ш", "Абдувасиев С", "Нематов Б"]}
                    trainModel="ТЭМ-2-6490" 
                />
                <Trains 
                    Instructions="Абрахматов М"
                    TrainNumber="30880" 
                    nameHightPerson={["Мирзоев Бох", "Исроилов С","Шаймарданов А","Файзуллаев Р"]}
                    namePerson = {['Курбонов Т', "Мусурмонов И", "Ачилов М", "Гаффаров В"]}
                    trainModel="ТЭМ-2-30880" 
                />



            </>
    )
}


function ColumnTen(){
    return(
        <>
            <TrainsTen/>
        </>
       
    )
}

export default ColumnTen
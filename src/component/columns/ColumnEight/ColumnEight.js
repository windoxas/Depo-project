import React from 'react'
import Trains from '../../../Trains'

function TrainsEight(){
    return(
            <>
                <Trains 
                    Instructions="Рахмокулов Н"
                    TrainNumber="2716" 
                    nameHightPerson={["Рустамов Б", "Дияров Б"]}
                    namePerson = {['Эргашев Р', "Абдиев Ал"]}
                    trainModel="2ТЭ10М-2716" 
                />
                <Trains 
                    Instructions="Рахмокулов Н"
                    TrainNumber="3089" 
                    nameHightPerson={["Маллаев Г", "Зайниддинов О","Гаврелин О","Эшбобоев Ч"]}
                    namePerson = {['Казаков Ж', "Чориев Ис", "Мирзоев Ан", "Халиков У"]}
                    trainModel="ТЭМ-2-3089" 
                />
                <Trains 
                    Instructions="Рахмокулов Н"
                    TrainNumber="7650" 
                    nameHightPerson={["Сафаров З", "Хикматов Ф","Мадиев Х","Ачилов А"]}
                    namePerson = {['Курбонов А', "Ибрагимов Од", "Рузиев С", "Орифжонов А"]}
                    trainModel="ТЭМ-2-7650" 
                />
                <Trains 
                    Instructions="Рахмокулов Н"
                    TrainNumber="3199" 
                    nameHightPerson={["Мамаев И", "Жумамуродов Р","Назаров Х","Имомов Б "]}
                    namePerson = {['Сафаров А', "Усмонов Г", "Холниёзов Х", "Поянов Р"]}
                    trainModel="ТЭМ-2-3199" 
                />
                <Trains 
                    Instructions="Рахмокулов Н"
                    TrainNumber="6103" 
                    nameHightPerson={["Эргашев О", "Адухалилов У","Маматов О","Нормуродов Ш "]}
                    namePerson = {['Ибрагимов Х', "Жонпулатов Т", "Алимуродов И", "Умаров Ж"]}
                    trainModel="ТЭМ-2-6103" 
                />
                <Trains 
                    Instructions="Рахмокулов Н"
                    TrainNumber="1715" 
                    nameHightPerson={["Усмонов К", "Норбоев О","Эргашев Ш","Рамазанов А "]}
                    namePerson = {['Холмуродов Ф', "Болтаев Ф", "Мирзоев Ик", "Нуралиев И"]}
                    trainModel="ТЭМ-2-1715" 
                />


            </>
    )
}


function ColumnEight(){
    return(
        <>
            <TrainsEight/>
        </>
       
    )
}

export default ColumnEight
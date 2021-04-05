import React from 'react'
import Trains from '../../../Trains'

function TrainsEleven(){
    return(
            <>
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="3089" 
                    nameHightPerson={["Раджабов Ё", "Пирматов Г","Норчаев Б","Юнсалиев Ак"]}
                    namePerson = {['Юлдашев Л', "Мусаев С","Абдуллаев Абд","Ишкузиев Аб"]}
                    trainModel="ТЭМ-2-3089" 
                />
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="6370" 
                    nameHightPerson={["Саъдуллаев С", "Мирзамедов С","Шокиров Н","Чоршамбиев А"]}
                    namePerson = {['Шокиров Ор', "Абдуллаев М", "Джуракулов Д", "Ахмедов Азиз"]}
                    trainModel="ТЭМ-2-6370" 
                />
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="5775" 
                    nameHightPerson={["Норкулов Ф", "Холмуродов Ш","Раджабов От","Турдев Х"]}
                    namePerson = {['Шоев И', "Жумаев Хус", "Абдуллаев Со", "Менгбоев Уй"]}
                    trainModel="ТЭМ-2-5775" 
                />
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="2170" 
                    nameHightPerson={["Рустамов Бах", "Халиков Эшкобил","Халиков Эшпулат","Хурсандов Б","Гуломов Б"]}
                    namePerson = {['Абдиев Ш', "ХужамуродовШ", "Кулдошев Б", "Зулфикоров Д","Абилов Б"]}
                    trainModel="ТЭМ-2-2170" 
                />
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="1793" 
                    nameHightPerson={["Худойназаров Ж", "Дусанов Ф","Хаметов А","Менгкулов Х "]}
                    namePerson = {['Нормуродов И', "Рахмонов И", "Менгбоев Ут", "Турсунов И"]}
                    trainModel="ТЭМ-2-1793" 
                />
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="1287" 
                    nameHightPerson={["Абдумуродов О", "Тошпулатов Б"]}
                    namePerson = {['Норалиев Ш', "Журакулов Ш"]}
                    trainModel="2ТЭ10М-1287" 
                />
                <Trains 
                    Instructions="Хайдаров Х ва Абдуллаев С "
                    TrainNumber="3265" 
                    nameHightPerson={["Норкобилов Х", "Шокиров Об"]}
                    namePerson = {['Субонов Ор', "Ахмедов У"]}
                    trainModel="2ТЭ10М-3265" 
                />


            </>
    )
}


function ColumnEleven(){
    return(
        <>
            <TrainsEleven/>
        </>
       
    )
}

export default ColumnEleven
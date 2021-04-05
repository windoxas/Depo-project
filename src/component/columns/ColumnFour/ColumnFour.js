import React from 'react'
import Trains from '../../../Trains'

function TrainFour(){
   return(
       <>
            <Trains 
                Instructions="Хоналиев Б "
                TrainNumber="0701" 
                nameHightPerson={["Турдиев У", "Рахимов О","Азизов Ф"]}
                namePerson = {['Топилов Ш', "Джураев Ф","Абдиев Ал"]}
                trainModel="2ТЭ10М-0701"
                
            />
            <Trains 
                Instructions="Хоналиев Б "
                TrainNumber="013" 
                nameHightPerson={["Эргашев С", "Курбонов Ж","Мамаев Б"]}
                namePerson = {['Жабборов Ж', "Пардаев Г","Усмонов О"]}
                trainModel="UzTE16M3-013"
            />
            <Trains 
                Instructions="Хоналиев Б "
                TrainNumber="032" 
                nameHightPerson={["Турсунов О", "Хидиров М","Авазов П"]}
                namePerson = {['Атакузиев У', "Тошбоев Аз","Зайнидинов Ш"]}
                trainModel="UzTE16M3-032"
            />
        
       </>
   )
}

export default function ColumnFour(){
    return(
        <div>
            <TrainFour/>
        </div>
    )
}
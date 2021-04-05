import React from 'react'
import Trains from '../../../Trains'

function TrainsSeven(){
    return(
            <>
                <Trains 
                    Instructions="Алламуратов Х"
                    TrainNumber="1071" 
                    nameHightPerson={["Дияров У", "Мирзоев Акб", "Самандаров З","Рахмонкулов М"]}
                    namePerson = {['Курбонов Ой', "Ашуров И", "Ходжамбердиев Х","Габбаров Х"]}
                    trainModel="ВЛ80С-1071"
                    
                
                />

            </>
    )
}


function ColumnSeven(){
    return(
        <>
            <TrainsSeven/>
        </>
       
    )
}

export default ColumnSeven
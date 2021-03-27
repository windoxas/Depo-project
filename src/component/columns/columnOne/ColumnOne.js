import React from 'react'
import PersonOne from '../../listPerson/list_compenents/PersonOne'
import PersonTwo from '../../listPerson/list_compenents/PersonTwo'
import PersonThree from '../../listPerson/list_compenents/PersonThree'
import DateTime from '../../listPerson/list_compenents/Date_time'
import moment from 'moment'
import './column_One.css'


function ColumnOne(){


 const [retTime, setRetTime] = React.useState(localStorage.getItem('setTimers')) 


localStorage.setItem('setTimers', retTime)
 setInterval(() => {
     let times = moment().set({h:12, m:"00", s:"00"}).format('HH:mm:ss')
    setRetTime(times)
 },1000)

 


    return(
        <>
        <div className="list_person">
                <div className="train">
                <h3 className="teacher_train">Инструктор: Кудратов Алим</h3>
                    <h1 className="train_number">2170</h1>
                  
                    <div className="train_drive_person">
                       
                        <PersonOne mashFirst="Хидиров Джурабек" mashSecond="Сидиков Олим"/>
                        <PersonTwo/>
                        <PersonThree/>
                        
                    </div>
                    <div className="team_change">
                        <div className="true_work">
                            <h3>На работе</h3>
                            <p>Хидиров Джурабек <span>{retTime}</span></p>
                            <p>Шаманов Фарух <span>{retTime}</span></p>
                        </div>
                        <div className="false_work">
                            <h3>На отдыхе</h3>
                            <p>Саидов Олим <span>{retTime}</span></p>
                            <p>Хидиров Рауф <span>{retTime}</span></p>
                        </div>
                    </div>
                       
                </div>

                <DateTime/>

        </div>
        
        </>
        )
}

export default ColumnOne
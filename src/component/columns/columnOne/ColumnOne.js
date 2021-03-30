import React from 'react'
import PersonOne from '../../listPerson/list_compenents/PersonOne'
import PersonTwo from '../../listPerson/list_compenents/PersonTwo'
import PersonThree from '../../listPerson/list_compenents/PersonThree'
import DateTime from '../../listPerson/list_compenents/Date_time'
import moment from 'moment'
import './column_One.css'


function ColumnOne(){

let [countUp, setCountUp] = React.useState()
let [countDown, setCountDown] = React.useState();





React.useEffect(() => {
    let hour = 0;
    let minut = 0;
    let second = localStorage.getItem('countsUp')
    function countUpTime(){
        localStorage.setItem('countsUp', second)
        let times = moment().set({h:hour, m:minut, s:second}).format('HH:mm:ss')
        setCountUp(times)
        second++
    }
    setInterval(countUpTime, 1000)
},[])


React.useEffect(() => {
    let hours = {
        hourDown:5,
        MinutDown:45,
        SecondDown:localStorage.getItem('countDown')
    }
    localStorage.setItem('minuteDown', hours.MinutDown)
    function countUpTime(){
        localStorage.setItem('countDown', hours.SecondDown)
        let timesDown = moment().set({h:hours.hourDown, m:hours.MinutDown, s:hours.SecondDown}).format('HH:mm:ss')
        setCountDown(timesDown)
        hours.SecondDown--
    }

    setInterval(countUpTime, 1000)
},[])




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
                            <p >Хидиров Джурабек <span className="show_countUp">{countUp}</span></p>
                            <p>Шаманов Фарух <span className="show_countUp">{countUp}</span></p>
                        </div>
                        <div className="false_work">
                            <h3>На отдыхе</h3>
                            <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Саидов Олим <span>{countDown}</span></p>
                            <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Хидиров Рауф <span>{countDown}</span></p>
                        </div>
                    </div>
                       
                </div>
          
                    <DateTime/>
              
        </div>
        
        </>
        )
}

export default ColumnOne
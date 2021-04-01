import React from 'react'
import moment from 'moment'



function Train3173(){

let timerRefTwo = React.useRef()

const [selectName, setSelectName] = React.useState(localStorage.getItem('selectNames3173'))
const [countUp, setCountUp] = React.useState()
const [countDown, setCountDown] = React.useState();
const [selectOne, setSelectOne] = React.useState(localStorage.getItem('selectOne3173'))
const [selectTwo, setSelectTwo] = React.useState(localStorage.getItem('selectTwo3173'))
const [date, setDate] = React.useState(localStorage.getItem('getDateTwo3173'))
const [time, setTime] = React.useState(localStorage.getItem('getTimeTwo3173'))
const [endData, setEndData] = React.useState(localStorage.getItem('endDateTwo3173'))
const [endTime, setEndTime] = React.useState(localStorage.getItem('endTimeTwo3173'))


localStorage.setItem('selectNames3173', selectName)
localStorage.setItem('selectOne3173', selectOne)
localStorage.setItem('selectTwo3173', selectTwo)
localStorage.setItem('getDateTwo3173', date)
localStorage.setItem('getTimeTwo3173', time)
localStorage.setItem('endTimeTwo3173', endTime)
localStorage.setItem('endDateTwo3173', endData)

function selectOneOption(e){                        
    clearInterval(timerRefTwo.current)
    localStorage.removeItem('countUpTwo3173')
    return setSelectOne(e.target.value)
       
}

function selectTwoOption(e){
    return setSelectTwo(e.target.value)
       
}

React.useEffect(() => {
    let hour = 0;
    let minuet = 0;
    let second = localStorage.getItem('countUpTwo3173')
  const countUpTime = () =>{
        localStorage.setItem('countUpTwo3173', second)
        let times = moment().set({h:hour, m:minuet, s:second}).format('HH:mm:ss')
        setCountUp(times)
        second++
    }
    timerRefTwo.current = setInterval(countUpTime, 1000)
},[])


React.useEffect(() => {
    let hours = {
        hourDown:10,
        MinutDown:45,
        SecondDown:localStorage.getItem('countDownTwo3173')
    }
    function countUpTime(){
        localStorage.setItem('countDownTwo3173', hours.SecondDown)
        let timesDown = moment().set({h:hours.hourDown, m:hours.MinutDown, s:hours.SecondDown}).format('HH:mm:ss')
        setCountDown(timesDown)
        hours.SecondDown--
    }

   setInterval(countUpTime, 1000)
   
},[])



function getData(){
    const NowDate = moment().format('YYYY-MM-DD')
    return setDate(NowDate.toString())
}
// SET TIMES

function getTime (e){
    setTime(e.target.value)
    endTimes()
}

// END TIMES

function endTimes(e){
    let minute = parseInt(time.slice(3,5))
    let getTimeSendEndTime =  moment().hours(parseInt(time)).minutes(minute).add(12, 'hours').format('HH:mm')
    return  setEndTime(getTimeSendEndTime)
}



function endDates(){
let getDateSendEndTime =  moment().hours(parseInt(time)).add(12, 'hours').format('YYYY-MM-DD')
setEndData(getDateSendEndTime.toString())
}


setTimeout(() => {
    endTimes()
    endDates()
    
}, 2000)

function startWork(){
    setSelectName(1)

 }


function endWork (){
    setSelectName(0)
    
}

let getStateChangeSelectTrainName = Number(localStorage.getItem('selectNames3173'))



    return(
        <>
        <div className="list_person">
                <div className="train">
                <h3 className="teacher_train">Инструктор: Темиров Х</h3>
                    <h1 className="train_number">2ТЭ10М-3173</h1>
                  
                    <div className="train_drive_person">
                    
                    <div>
                            <div>
                            <h3 style={{background:"rgb(6, 3, 182)"}}>Машинист</h3>
                            <h2>{localStorage.getItem('selectOne3173')}</h2>
                                <select disabled = {getStateChangeSelectTrainName} onChange={(e) => selectOneOption(e)}  >
                                    <option >Выбирите машинист</option>
                                    <option>Сапаров С</option>
                                    <option>Шобиров А</option>
                                    <option>Ишонкулов А</option>

                                </select>
                            </div>
                        </div>
                        <div>
                        <div>
                                <h3>Пом/Машинист</h3>
                                <h2>{localStorage.getItem('selectTwo3173')}</h2>
                                <select disabled = {getStateChangeSelectTrainName} onChange={(e) => selectTwoOption(e)} >
                                    <option >Выбирите Пом/машинист</option>
                                    <option>Уралов Д</option>
                                    <option>Джураев Шав</option>
                                    <option>Гиёсиддинов Ж</option>

                                </select>
                            </div>
                        </div>
        
                    
                    </div>
                    <div className="team_change">
                        <div className="true_work">
                            <h3>На работе</h3>
                            <p >{selectOne} <span className="show_countUp">{countUp}</span></p>
                            <p>{selectTwo} <span className="show_countUp">{countUp}</span></p>
                        </div>
                        <div className="false_work">
                            <h3>На отдыхе</h3>
                            <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Саидов Олим <span>{countDown}</span></p>
                            <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Хидиров Рауф <span>{countDown}</span></p>
                        </div>

                    </div>
                       
                </div>
          
                <div className="train_time">
                <div>
                    <div className="train_start">
                        <h4>Нач.Явка</h4>
                        <input value={date} onChange={() => getData()} type="date"/>
                        <input defaultValue={time}  onChange={(e) => getTime(e)} type="time"/>
                    </div>
                    <button onClick={startWork} className={"start_work"}>Отправиты</button>
                </div>
               
          <div>
                <div className="train_end">
                            <h4>Зак.Явка</h4>
                            <input value={endData} onChange={() => endDates()}  type="date"/>
                            <input defaultValue={endTime} onChange={(e) => endTimes(e)}  type="time"/>
                        </div>
                        <button onClick={endWork} className="end_work">Закончить</button>
            </div>
        </div>
              
        </div>
        
        </>
        )
}

export default Train3173
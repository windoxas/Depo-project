import React from 'react'
import moment from 'moment'



function Trains(props){

let timerRefTwo = React.useRef()
const numberTrain = props.TrainNumber;
const trainBlock = props.boolean;
const [selectName, setSelectName] = React.useState(localStorage.getItem('selectNames'+numberTrain))
const [countUp, setCountUp] = React.useState()
const [countDown, setCountDown] = React.useState();
const [selectOne, setSelectOne] = React.useState(localStorage.getItem('selectOne'+numberTrain))
const [selectTwo, setSelectTwo] = React.useState(localStorage.getItem('selectTwo'+numberTrain))
const [selectThree, setSelectThree] = React.useState(localStorage.getItem('selectThree'+numberTrain))
const [date, setDate] = React.useState(localStorage.getItem('getDateTwo'+numberTrain))
const [time, setTime] = React.useState(localStorage.getItem('getTimeTwo'+numberTrain))
const [endData, setEndData] = React.useState(localStorage.getItem('endDateTwo'+numberTrain))
const [endTime, setEndTime] = React.useState(localStorage.getItem('endTimeTwo'+numberTrain))


localStorage.setItem(`selectNames${numberTrain}`, selectName)
localStorage.setItem(`selectOne${numberTrain}`, selectOne)
localStorage.setItem(`selectTwo${numberTrain}`, selectTwo)
localStorage.setItem(`selectThree${numberTrain}`, selectThree)
localStorage.setItem(`getDateTwo${numberTrain}`, date)
localStorage.setItem(`getTimeTwo${numberTrain}`, time)
localStorage.setItem(`endTimeTwo${numberTrain}`, endTime)
localStorage.setItem(`endDateTwo${numberTrain}`, endData)

function selectOneOption(e){                        
    clearInterval(timerRefTwo.current)
    localStorage.removeItem(`countUp${numberTrain}`)
     setSelectOne(e.target.value)
       
}

function selectTwoOption(e){
    setSelectTwo(e.target.value)
       
}
function selectThreeOption(e){
    setSelectThree(e.target.value)
       
}

React.useEffect(() => {
    let hour = 0;
    let minuet = 0;
    let second = localStorage.getItem(`countUp${numberTrain}`)
  const countUpTime = () =>{
        localStorage.setItem(`countUp${numberTrain}`, second)
        let times = moment().set({h:hour, m:minuet, s:second}).format('HH:mm:ss')
        second++
        setCountUp(times)

    }
    timerRefTwo.current = setInterval(countUpTime, 1000)
},[setCountUp,numberTrain])


React.useEffect(() => {
    let hours = {
        hourDown:10,
        MinutDown:45,
        SecondDown:localStorage.getItem(`countDown${numberTrain}`)
    }
    function countDownTime(){
        localStorage.setItem(`countDown${numberTrain}`, hours.SecondDown)
        let timesDown = moment().set({h:hours.hourDown, m:hours.MinutDown, s:hours.SecondDown}).format('HH:mm:ss')
        hours.SecondDown--
        setCountDown(timesDown)
    }

   setInterval(countDownTime, 1000)
   
},[setCountDown,numberTrain])



function getData(){
    const NowDate = moment().format('YYYY-MM-DD')
    setDate(NowDate.toString())
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
    setEndTime(getTimeSendEndTime)
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

let getStateChangeSelectTrainName = Number(localStorage.getItem('selectNames'+numberTrain))



    return(
        <>
        <div className="list_person">
                <div className="train">
                <h3 className="teacher_train">Инструктор: {props.Instructions}</h3>
                    <h1 className="train_number">{props.trainModel}</h1>
                  
                    <div className="train_drive_person">
                    
                        <div>
                            <div>
                                <h3 style={{background:"rgb(6, 3, 182)"}}>Машинист</h3>
                                <h2>{localStorage.getItem('selectOne'+numberTrain)}</h2>
                                    <select disabled = {getStateChangeSelectTrainName} onChange={(e) => selectOneOption(e)}  >
                                        <option >Выбирите машинист</option>
                                        {props.nameHightPerson.map(trainHigPerson =>(<option key={trainHigPerson}>{trainHigPerson}</option>))}

                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>
                                        <h3>Пом/Машинист</h3>
                                        <h2>{localStorage.getItem('selectTwo'+numberTrain)}</h2>
                                        <select disabled = {getStateChangeSelectTrainName} onChange={(e) => selectTwoOption(e)} >
                                            <option >Выбирите Пом/машинист</option>
                                            {props.namePerson.map(trainPerson =>(<option key={trainPerson}>{trainPerson}</option>))}

                                        </select>
                                    </div>
                            </div>
                            
                            {trainBlock &&
                                <div>
                                        <div>
                                            <h3>Пом/Машинист</h3>
                                            <h2>{localStorage.getItem('selectThree'+numberTrain)}</h2>
                                            <select disabled = {getStateChangeSelectTrainName} onChange={(e) => selectThreeOption(e)} >
                                                <option >Выбирите Пом/машинист</option>
                                                {props.namePersonTwo.map(trainPersonTwo =>(<option key={trainPersonTwo}>{trainPersonTwo}</option>))}

                                            </select>
                                        </div>
                                </div>
                            }
                        
                           
                    </div>

                    <div className="team_change">
                        <div className="true_work">
                            <h3>На работе</h3>
                            <p >{selectOne} <span className="show_countUp">{countUp}</span></p>
                            <p>{selectTwo} <span className="show_countUp">{countUp}</span></p>
                            {trainBlock && <p>{selectThree} <span className="show_countUp">{countUp}</span></p>}
                        </div>
                        { trainBlock && 
                        
                            <div className="false_work">
                                <h3>На ожидание</h3>
                                <p style={countDown >  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Каримжонов У <span>{"00:00:00"}</span></p>
                                <p style={countDown >  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Баратов Б <span>{"00:00:00"}</span></p>
                                <p style={countDown >  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Жумаев М <span>{"00:00:00"}</span></p>
                            </div>
                        }
                        <div className="false_work">
                            <h3>На отдыхе</h3>
                            <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Саидов Олим <span>{countDown}</span></p>
                            <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Хидиров Рауф <span>{countDown}</span></p>
                            { trainBlock && <p style={countDown <  "00:00:01" ? {background:'yellow', color:'black'}: {background:'red'}}>Хидиров Рауф <span>{countDown}</span></p>}
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

export default Trains
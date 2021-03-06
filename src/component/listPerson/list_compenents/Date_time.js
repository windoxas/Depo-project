import React from 'react'
import moment from 'moment'


function DateTime(){
    const [date, setDate] = React.useState(localStorage.getItem('getDate'))
    const [time, setTime] = React.useState(localStorage.getItem('getTime'))
    const [endData, setEndData] = React.useState(localStorage.getItem('endDate'))
    const [endTime, setEndTime] = React.useState(localStorage.getItem('endTime'))
localStorage.setItem('getDate', date)
    function getData(){
        const NowDate = moment().format('YYYY-MM-DD')
        return setDate(NowDate.toString())
    }
// SET TIMES
localStorage.setItem('getTime', time)
    function getTime (e){
        setTime(e.target.value)
        endTimes()
    }

// END TIMES
localStorage.setItem('endTime', endTime)
function endTimes(e){
        let minute = parseInt(time.slice(3,5))
        let getTimeSendEndTime =  moment().hours(parseInt(time)).minutes(minute).add(12, 'hours').format('HH:mm')
        return  setEndTime(getTimeSendEndTime)
    }

localStorage.setItem('endDate', endData)
function endDates(){
    let getDateSendEndTime =  moment().hours(parseInt(time)).add(12, 'hours').format('YYYY-MM-DD')
    setEndData(getDateSendEndTime.toString())
}

    setTimeout(() => {
        
        endDates()
        
    }, 2000)

function sendToDb(){
        
         endTimes()
     }


 function resualtTime (){

 }

// END TIMES END
    return(
            <div className="train_time">
                <div>
                    <div className="train_start">
                        <h4>Нач.Явка</h4>
                        <input value={date} onChange={() => getData()} type="date"/>
                        <input defaultValue={time}  onChange={(e) => getTime(e)} type="time"/>
                    </div>
                    <button onClick={sendToDb} className={"start_work"}>Отправиты</button>
                </div>
               
          <div>
                <div className="train_end">
                            <h4>Зак.Явка</h4>
                            <input value={endData} onChange={() => endDates()}  type="date"/>
                            <input defaultValue={endTime} onChange={(e) => endTimes(e)}  type="time"/>
                        </div>
                        <button onClick={() => resualtTime()} className="end_work">Закончить</button>
            </div>
        </div>
    )
}

export default DateTime
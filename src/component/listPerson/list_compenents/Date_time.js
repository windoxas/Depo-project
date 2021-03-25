import React from 'react'
import moment from 'moment'


function DateTime(){
const [date, setDate] = React.useState(localStorage.getItem('getDate'))
const [time, setTime] = React.useState(localStorage.getItem('getTime'))
const [endTime, setEndTime] = React.useState(localStorage.getItem('endTime'))


console.log(time.slice(3,5));

localStorage.setItem('getDate', date)
    function getData(){
        const NowDate = moment().format('YYYY-MM-DD')
        return setDate(NowDate.toString())
    }
// SET TIMES
localStorage.setItem('getTime', time)
    function getTime (e){
        endTimes()
        return setTime(e.target.value)

    }

// END TIMES
localStorage.setItem('endTime', endTime)

    function endTimes(){
        let getTimeSendEndTime = moment().hours(parseInt(time)).minutes(parseInt(time.slice(3,5))).add(12, 'hours').format('HH:mm')
        console.log(getTimeSendEndTime);
        return setEndTime(getTimeSendEndTime)
    }

// END TIMES END
    return(
            <div className="train_time">
                <div className="train_start">
                    <h4>Нач.Явка</h4>
                    <input value={date} onChange={() => getData()} type="date"/>
                    <input defaultValue={time}  onChange={(e) => getTime(e)} type="time"/>
                </div>
                <div className="train_end">
                    <h4>Зак.Явка</h4>
                    <input  type="date"/>
                    <input defaultValue={endTime} onChange={(e) => endTimes(e)}  type="time"/>
                </div>
        </div>
    )
}

export default DateTime
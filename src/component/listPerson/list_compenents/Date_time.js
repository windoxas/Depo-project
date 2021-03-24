import React from 'react'



function DateTime(){
const [date, setDate] = React.useState(localStorage.getItem('getDate'))
const [time, setTime] = React.useState(localStorage.getItem('getTime'))
console.log(date);
localStorage.setItem('getDate', date)
    function getData(e){
        let year = new Date().getFullYear()
        let month = new Date().getMonth()+1
        let day = new Date().getDate()
        const jerto = `${year}-0${month}-${day}`
        return setDate(jerto.toString())
    }

localStorage.setItem('getTime', time)
    function getTime (e){
        console.log(e.target.value);
        return setTime(e.target.value)

    }
    return(
            <div className="train_time">
                <div className="train_start">
                    <h4>Нач.Явка</h4>
                    <input value={date} onChange={(e) => getData(e)} type="date"/>
                    <input defaultValue={time}  onChange={(e) => getTime(e)} type="time"/>
                </div>
                <div className="train_start">
                    <h4>Зак.Явка</h4>
                    <input  type="date"/>
                    <input defaultValue="25:42"  type="time"/>
                </div>
        </div>
    )
}

export default DateTime
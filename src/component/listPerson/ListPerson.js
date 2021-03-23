import React from 'react'
import './ListPerson.css'




function ListPerson(){
    
const [selectOne, setSelectOne] = React.useState('')
const [selectTwo, setSelectTwo] = React.useState('')
const [selectThree, setSelectThree] = React.useState('')

function selectOneOption(e){
    return setSelectOne(e.target.value)
       
}
function selectTwoOption(e){
    return setSelectTwo(e.target.value)
       
}
function selectThreeOption(e){
    return setSelectThree(e.target.value)
       
}



    return(
        <div className="list_person">
                <div className="train">
                    <h1>0208</h1>
                    <div className="train_drive_person">
                        <div>
                            <h3>Машинист</h3>
                            <h2>{selectOne}</h2>
                            <select onChange={(e) => selectOneOption(e)}  >
                                <option >Выбирите машинист</option>
                                <option>Турдиев Жахон</option>
                                <option>Мардаев Санжар</option>
                                <option>Сидиров Фозил</option>
                            </select>
                        </div>
                        <div>
                            <h3>Пом/Машинист</h3>
                            <h2>{selectTwo}</h2>
                            <select onChange={(e) => selectTwoOption(e)} >
                                 <option disabled>Выбирите Пом/машинист</option>
                                <option>Турдуиев Жахон</option>
                                <option>Курдаев Санжар</option>
                                <option>Сидиров Фозил</option>
                            </select>
                        </div>
                        <div>
                            <h3>Пом/машинист</h3>
                            <h2>{selectThree}</h2>
                            <select onChange={(e) => selectThreeOption(e)}>
                                <option>Выбирите Пом/машинист</option>
                                <option>Турдиев Жахон</option>
                                <option>Мардаев Санжар</option>
                                <option>Муродов Фозил</option>
                            </select>
                        </div>
                    </div>
                    <div className="train_time">
                        <div className="train_start">
                            <input   type="date"/>
                            <input  type="time"/>
                        </div>
                        <div className="train_start">
                            <input type="date"/>
                            <input type="time"/>
                        </div>
                    </div>
                </div>
        </div>
        )
}

export default ListPerson
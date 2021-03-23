import React from 'react'


function PersonTwo(){
    const [selectTwo, setSelectTwo] = React.useState('')
    function selectTwoOption(e){
        return setSelectTwo(e.target.value)
           
    }

    return(
        <div>
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
        </div>
    )
}


export default PersonTwo
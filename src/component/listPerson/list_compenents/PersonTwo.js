import React from 'react'


function PersonTwo(){
    const [selectTwo, setSelectTwo] = React.useState(localStorage.getItem('selectTwo'))
    localStorage.setItem('selectTwo', selectTwo)
    function selectTwoOption(e){
        return setSelectTwo(e.target.value)
           
    }

    return(
        <div>
           <div>
                <h3>Пом/Машинист</h3>
                <h2>{localStorage.getItem('selectTwo')}</h2>
                <select onChange={(e) => selectTwoOption(e)} >
                    <option >Выбирите Пом/машинист</option>
                    <option>Шаманов Фарух</option>
                    <option>Хидиров Рауф</option>

                </select>
            </div>
        </div>
    )
}


export default PersonTwo
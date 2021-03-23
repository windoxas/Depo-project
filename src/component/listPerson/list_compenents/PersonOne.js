import React from 'react'


function PersonOne(){
    const [selectOne, setSelectOne] = React.useState(localStorage.getItem('test'))
    localStorage.setItem('test', selectOne)

    function selectOneOption(e){
        return setSelectOne(e.target.value)
           
    }

    return(
        <div>
            <div>
              <h3>Машинист</h3>
               <h2>{localStorage.getItem('test')}</h2>
                <select onChange={(e) => selectOneOption(e)}  >
                    <option >Выбирите машинист</option>
                    <option>Турдиев Жахон</option>
                    <option>Мардаев Санжар</option>
                    <option>Сидиров Фозил</option>
                </select>
            </div>
        </div>
    )
}


export default PersonOne
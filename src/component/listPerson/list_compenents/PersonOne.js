import React from 'react'


function PersonOne(props){
    const [selectOne, setSelectOne] = React.useState(localStorage.getItem('selectOne'))
    localStorage.setItem('selectOne', selectOne)

    function selectOneOption(e){
        return setSelectOne(e.target.value)
           
    }

    return(
        <div>
            <div>
              <h3 style={{background:"rgb(6, 3, 182)"}}>Машинист</h3>
               <h2>{localStorage.getItem('selectOne')}</h2>
                <select onChange={(e) => selectOneOption(e)}  >
                    <option >Выбирите машинист</option>
                    <option>{props.mashFirst}</option>
                    <option>{props.mashSecond}</option>

                </select>
            </div>
        </div>
    )
}


export default PersonOne

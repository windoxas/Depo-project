import React from 'react'



function PersonThree(){
    const [selectThree, setSelectThree] = React.useState('')

    function selectThreeOption(e){
        return setSelectThree(e.target.value)
    }
        
    return(
        <div>
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
    )
}

export default PersonThree
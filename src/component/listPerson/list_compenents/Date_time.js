import React from 'react'



function DateTime(){
    return(
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
    )
}

export default DateTime
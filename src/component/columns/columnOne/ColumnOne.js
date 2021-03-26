import React from 'react'
import PersonOne from '../../listPerson/list_compenents/PersonOne'
import PersonTwo from '../../listPerson/list_compenents/PersonTwo'
import PersonThree from '../../listPerson/list_compenents/PersonThree'
// import DateTime from './list_compenents/Date_time'




function ColumnOne(){

    return(
        <>
        <div className="list_person">
                <div className="train">
                    <h1 className="train_number">2170</h1>
                    <div className="train_drive_person">
                       
                        <PersonOne/>
                        <PersonTwo/>
                        <PersonThree/>
                        
                    </div>
                       
                </div>

        </div>
        
        </>
        )
}

export default ColumnOne
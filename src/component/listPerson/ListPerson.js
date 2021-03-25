import React from 'react'
import './ListPerson.css'
import PersonOne from './list_compenents/PersonOne'
import PersonTwo from './list_compenents/PersonTwo'
import PersonThree from './list_compenents/PersonThree'
import DateTime from './list_compenents/Date_time'




function ListPerson(){

    return(
        <div className="list_person">
                <div className="train">
                    <h1 className="train_number">0208</h1>
                    <div className="train_drive_person">
                       
                        <PersonOne/>
                        <PersonTwo/>
                        <PersonThree/>
                        
                    </div>
                        <DateTime/>
                </div>
                <div className="train">
                    <h1 className="train_number">0209</h1>
                    <div className="train_drive_person">
                       
                        <PersonOne/>
                        <PersonTwo/>
                        <PersonThree/>
                        
                    </div>
                        <DateTime/>
                </div>
                <div className="train">
                    <h1 className="train_number">0210</h1>
                    <div className="train_drive_person">
                       
                        <PersonOne/>
                        <PersonTwo/>
                        <PersonThree/>
                        
                    </div>
                        <DateTime/>
                </div>
                <div className="train">
                    <h1 className="train_number">0211</h1>
                    <div className="train_drive_person">
                       
                        <PersonOne/>
                        <PersonTwo/>
                        <PersonThree/>
                        
                    </div>
                        <DateTime/>
                </div>
        </div>
        )
}

export default ListPerson
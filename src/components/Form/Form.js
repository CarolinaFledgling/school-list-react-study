import React from 'react'
import './Form.css'
import Button from '../Button/Button'

function Form(props) {
    return (
        <div>
            <form >
                <div>
                    <label for='name'>Name</label>
                    <input type='text' placeholder='name' id='name'></input>
                </div>
                <div>
                    <label for='surname'>Surname</label>
                    <input type='text' placeholder='surname' id='surname'></input>
                </div>
                <div>
                    <label for='Attendance'>Attendance</label>
                    <input type='text' placeholder='Attendance: 50%' id='surname'></input>
                </div>
                {/* <div>
                        <label for='checkAttendance'>Attendance</label>
                        <input type='checkbox' id='checkAttendance'></input>
                    </div> */}
            </form>
            
            <Button/>
        </div>
    )
}



export default Form


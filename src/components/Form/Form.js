import React from 'react'
import './Form.css'
import AddButton from '../AddButton/AddButton'


function Form(props) {
    return (
        <div>
            <form >
                <div>
                    <label htmlfor='name'>Name</label>
                    <input type='text' placeholder='name' id='name'></input>
                </div>
                <div>
                    <label htmlfor='surname'>Surname</label>
                    <input type='text' placeholder='surname' id='surname'></input>
                </div>
                <div>
                    <label htmlfor='Attendance'>Attendance</label>
                    <input type='text' placeholder='Attendance: 50%' id='surname'></input>
                </div>
                {/* <div>
                        <label for='checkAttendance'>Attendance</label>
                        <input type='checkbox' id='checkAttendance'></input>
                    </div> */}
            </form>

            <AddButton />
        </div>
    )
}



export default Form


import React, { useState } from 'react'
import './Form.css'
import AddButton from '../AddButton/AddButton'
import './Form.css'


function Form({ onSubmit }) {

    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [inputAttendace, setInputAttendace] = useState('')




    const handlerAddPerson = (e) => {
        e.preventDefault()

        const newStudent = {
            name: inputName,
            surname: inputSurname,
            attendace: inputAttendace,
            id: Math.random() * 100,
        }
        onSubmit(newStudent)

        setInputName('');
        setInputSurname('');
        setInputAttendace('');
    }
    return (
        <div className='form-container'>
            <form >
                <div>
                    <label htmlfor='name'>Name</label>
                    <input value={inputName} onChange={(e) => setInputName(e.target.value)} type='text' placeholder='name' id='name'></input>
                </div>
                <div>
                    <label htmlfor='surname'>Surname</label>
                    <input value={inputSurname} onChange={(e) => setInputSurname(e.target.value)} type='text' placeholder='surname' id='surname'></input>
                </div>
                <div>
                    <label htmlfor='Attendance'>Attendance</label>
                    <input value={inputAttendace} onChange={(e) => setInputAttendace(e.target.value)} type='text' placeholder='Attendance: 50%' id='surname'></input>
                </div>
                <AddButton handlerAddPerson={handlerAddPerson} />
            </form>

        </div>
    )
}



export default Form


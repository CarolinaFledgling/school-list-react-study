import React, { useState } from 'react'
import './Form.css'
import AddButton from '../AddButton/AddButton'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';


function Form({ onSubmit, setshowCloseBtnMainListStudent, setShowCloseBtnSearchStudent }) {

    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [inputAttendace, setInputAttendace] = useState('')




    const handlerAddPerson = (e) => {
        e.preventDefault()

        if (inputName === '') {
            return alert('It is necessary to fill in this form 🔥 😋')
        }
        if (inputSurname === '') {
            return alert('It is necessary to fill in this form 🔥 😋')
        }
        if (inputAttendace === '') {
            return alert('It is necessary to fill in this form 🔥 😋')
        }

        const newStudent = {
            name: inputName,
            surname: inputSurname,
            attendace: inputAttendace,
            id: uuidv4(),
        }
        onSubmit(newStudent)
        setshowCloseBtnMainListStudent(true)
        setShowCloseBtnSearchStudent(false)

        setInputName('');
        setInputSurname('');
        setInputAttendace('');
    }
    return (
        <div className='form-container'>
            <form >
                <div>
                    <label className='label-form' htmlfor='name'>Name</label>
                    <input type='text' className="input-form" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder='name' id='name'></input>
                </div>
                <div>
                    <label className='label-form' htmlfor='surname'>Surname</label>
                    <input type='text' className="input-form" value={inputSurname} onChange={(e) => setInputSurname(e.target.value)} placeholder='surname' id='surname'></input>
                </div>
                <div>
                    <label className='label-form' htmlfor='Attendance'>Attendance</label>
                    <input type="number" className="input-form" min="0" max="100" value={inputAttendace} onChange={(e) => setInputAttendace(e.target.value)} placeholder='attendance' id='surname'></input>
                </div>
                <AddButton handlerAddPerson={handlerAddPerson} />
            </form>

        </div>
    )
}



export default Form


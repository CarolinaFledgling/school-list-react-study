import React, { useState } from 'react'
import './Form.css'
import AddButton from '../AddButton/AddButton'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';


function Form({ onSubmit, setshowCloseBtnMainListStudent, setshowEditBtnMainListStudent, setShowCloseBtnSearchStudent, setShowEditBtnSearchStudent }) {

    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [inputAttendace, setInputAttendace] = useState('')
    const [activeCheckboxInput, setactiveCheckboxInput] = useState(true)





    const handlerAddPerson = (e) => {
        e.preventDefault()

        if (inputName === '') {
            return alert('It is necessary to fill in this form 🔥 😋')
        }
        if (inputSurname === '') {
            return alert('It is necessary to fill in this form 🔥 😋')
        }
        if (inputAttendace === '' && (!Number(inputAttendace))) {
            return alert('Attendace must be a number🔥 😋')
        }

        const newStudent = {
            name: inputName,
            surname: inputSurname,
            attendace: inputAttendace,
            isActive: activeCheckboxInput,
            id: uuidv4(),

        }

        onSubmit(newStudent)
        console.log('dodany student', newStudent)
        setshowCloseBtnMainListStudent(true)
        setShowCloseBtnSearchStudent(false)
        setShowEditBtnSearchStudent(false)
        setshowEditBtnMainListStudent(true)

        setInputName('');
        setInputSurname('');
        setInputAttendace('');
        setactiveCheckboxInput(true)
    }
    return (
        <div className='form-container'>
            <form >
                <div>
                    <label className='label-form' htmlfor='name'>Name</label>
                    <input
                        type='text'
                        className="input-form"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder='name'
                        id='name' />
                </div>
                <div>
                    <label className='label-form' htmlfor='surname'>Surname</label>
                    <input
                        type='text'
                        className="input-form"
                        value={inputSurname}
                        onChange={(e) => setInputSurname(e.target.value)}
                        placeholder='surname'
                        id='surname' />
                </div>
                <div>
                    <label className='label-form' htmlfor='Attendance'>Attendance</label>
                    <input
                        type="number"
                        className="input-form"
                        min="0"
                        max="100"
                        value={inputAttendace}
                        onChange={(e) => setInputAttendace(e.target.value)}
                        placeholder='%' />
                </div>
                <div>
                    <label htmlfor="active">Active</label>
                    <input
                        type="checkbox"
                        name="active"
                        checked={activeCheckboxInput}
                        onChange={(e) => setactiveCheckboxInput(e.target.checked)} />
                </div>
                <AddButton handlerAddPerson={handlerAddPerson} />
            </form>

        </div>
    )
}



export default Form


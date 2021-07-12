import React, { useState } from 'react'
import styles from './Form.module.scss'
import AddButton from '../AddButton/AddButton'
import { v4 as uuidv4 } from 'uuid';


function Form({ onSubmit, setshowCloseBtnMainListStudent, setshowEditBtnMainListStudent, setShowCloseBtnSearchStudent, setShowEditBtnSearchStudent }) {

    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [inputAttendace, setInputAttendace] = useState('')
    const [activeCheckboxInput, setactiveCheckboxInput] = useState(true)





    const handlerAddPerson = (e) => {
        e.preventDefault()

        //dlaczego nie działa mi tutaj sprawdzanie długości ?
        if (!inputName && inputName.length <= 4) {
            return alert('It is necessary to fill name in this form 🔥 😋')
        }
        if (!inputSurname) {
            return alert('It is necessary to fill surname in this form 🔥 😋')
        }
        if (!inputAttendace && (!Number(inputAttendace))) {
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

        <div className={styles.container} >

            <form className={styles.form} >
                <div>
                    <label className={styles.label} htmlfor='name'>Name</label>
                    <input
                        type='text'
                        className={styles.input}
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder='name'
                        id='name' />
                </div>
                <div>
                    <label className={styles.label} htmlfor='surname'>Surname</label>
                    <input
                        type='text'
                        className={styles.input}
                        value={inputSurname}
                        onChange={(e) => setInputSurname(e.target.value)}
                        placeholder='surname'
                        id='surname' />
                </div>
                <div>
                    <label className={styles.label} htmlfor='Attendance'>Attendance</label>
                    <input
                        type="number"
                        className={styles.input}
                        min="0"
                        max="100"
                        value={inputAttendace}
                        onChange={(e) => setInputAttendace(e.target.value)}
                        placeholder='%' />
                </div>
                <div>
                    <label className={styles.checkboxLabel} htmlfor="active">Active</label>
                    <input

                        className={styles.checkboxInput}
                        type="checkbox"
                        name="active"
                        checked={activeCheckboxInput}
                        onChange={(e) => setactiveCheckboxInput(e.target.checked)} />
                </div>
                <AddButton handlerAddPerson={handlerAddPerson} />
            </form>

        </ div>
    )
}



export default Form


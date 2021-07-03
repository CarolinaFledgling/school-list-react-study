import React from 'react'
import './Form.css'
import AddButton from '../AddButton/AddButton'
import './Form.css'


function Form({ setInputNameText, setStudentDetails, studentDetails, inputNameText }) {

    const inputTextNameHandler = (e) => {
        console.log(e.target.value)
        setInputNameText(e.target.value)
    }

    const handlerAddPerson = (e) => {
        e.preventDefault()
        console.log('hey')
        setStudentDetails([
            ...studentDetails,
            {
                name: inputNameText,
                id: Math.random() * 100,
            }
        ]);
        
        setInputNameText('');
    }
    return (
        <div className='form-container'>
            <form >
                <div>
                    <label htmlfor='name'>Name</label>
                    <input value={inputNameText} onChange={inputTextNameHandler} type='text' placeholder='name' id='name'></input>
                </div>
                <div>
                    <label htmlfor='surname'>Surname</label>
                    <input type='text' placeholder='surname' id='surname'></input>
                </div>
                <div>
                    <label htmlfor='Attendance'>Attendance</label>
                    <input type='text' placeholder='Attendance: 50%' id='surname'></input>
                </div>
                <AddButton handlerAddPerson={handlerAddPerson} />
            </form>

        </div>
    )
}



export default Form


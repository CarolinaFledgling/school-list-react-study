import React, { useState } from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'
import SaveButton from '../SaveButton/SaveButton'
import ActiveInActiveCheckboxBtn from '../ActiveInActiveCheckboxBtn/ActiveInActiveCheckboxBtn'

export default function StudentInfo({ name, surname, attendace, onDeleteStudent, id, showCloseBtnSearchStudent, showCloseBtnMainListStudent, onSaveHandler, onActiveInputHandler }) {
    const [inputSaveName, setInputSaveName] = useState(name)
    const [inputSaveSurname, setInputSaveSurname] = useState(surname)
    const [inputSaveAttendace, setInputSaveAttendace] = useState(attendace)
    return (

        <li className="student-details">
            <div className="fields">
                <label className="student-name-label" htmlFor="input-name">Name:&nbsp;</label>
                <input value={inputSaveName} onChange={(e) => setInputSaveName(e.target.value)} id="input-name" type="text" />
            </div>
            <div className="fields">
                <label className="student-name-label" htmlFor="input-name">
                    Surname:&nbsp;
                </label>
                <input value={inputSaveSurname} onChange={(e) => setInputSaveSurname(e.target.value)} id="input-name" type="text" />
            </div>
            <div className="fields">
                <label className="student-name-label" htmlFor="input-name">
                    Attendace:&nbsp;
                </label>
                <input value={inputSaveAttendace} onChange={(e) => setInputSaveAttendace(e.target.value)} id="input-name" type="text" />
            </div>
            <div className="btn-group">
                <ActiveInActiveCheckboxBtn onActiveInputHandler={onActiveInputHandler} />
                <SaveButton
                    onSaveHandler={onSaveHandler}
                    id={id}
                    inputSaveName={inputSaveName}
                    inputSaveSurname={inputSaveSurname}
                    inputSaveAttendace={inputSaveAttendace} />
                <RemoveButton
                    onDeleteStudent={onDeleteStudent}
                    id={id}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}

                />

            </div>
        </li>

    )
}

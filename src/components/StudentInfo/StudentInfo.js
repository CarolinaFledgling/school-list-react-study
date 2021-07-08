import React, { useState } from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'
import SaveButton from '../SaveButton/SaveButton'


export default function StudentInfo({ isActive,name, surname, attendace, onDeleteStudent, id, showCloseBtnSearchStudent,showEditBtnSearchStudent, showCloseBtnMainListStudent,showEditBtnMainListStudent, onSaveHandler }) {
    const [inputSaveName, setInputSaveName] = useState(name)
    const [inputSaveSurname, setInputSaveSurname] = useState(surname)
    const [inputSaveAttendace, setInputSaveAttendace] = useState(attendace)
    const [inputSaveIsActive, setInputSaveIsActive] = useState(isActive)

    // próba zrobienia Edycji 
    const [isEditing, setEditing] = useState(false);

    // podzielić to na editingTemplate i viewTemplate?? to maja byc komponenty ? czy display block lub none
    // <li>{isEditing ? editingTemplate : viewTemplate}</li>


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
            <div>
                <label htmlfor="active">Active</label>
                <input
                    type="checkbox"
                    name="active"
                    checked={inputSaveIsActive}
                    onChange={(e) => setInputSaveIsActive(e.target.checked)} />
            </div>
            <div className="btn-group">
                <SaveButton
                    onSaveHandler={onSaveHandler}
                    id={id}
                    inputSaveName={inputSaveName}
                    inputSaveSurname={inputSaveSurname}
                    inputSaveAttendace={inputSaveAttendace}
                    inputSaveIsActive={inputSaveIsActive} 
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    />
                    
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

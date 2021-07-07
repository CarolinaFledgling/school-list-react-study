import React, { useState } from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'
import SaveButton from '../SaveButton/SaveButton'

export default function StudentInfo({ name, surname, attendace, onDeleteStudent, id, showCloseBtnSearchStudent, showCloseBtnMainListStudent, onSaveHandler }) {
    const [inputSaveName, setInputSaveName] = useState(name)
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
                <input id="input-name" type="text" value={surname} />
            </div>
            <div className="fields">
                <label className="student-name-label" htmlFor="input-name">
                    Attendace:&nbsp;
                </label>
                <input id="input-name" type="text" value={attendace} />
            </div>
            <div className="btn-group">
                <SaveButton onSaveHandler={onSaveHandler} id={id} inputSaveName={inputSaveName} name={name}/>
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

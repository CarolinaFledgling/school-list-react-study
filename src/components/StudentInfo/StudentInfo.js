import React from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function StudentInfo({ name, surname, attendace, onDeleteStudent, id, showCloseBtnSearchStudent, showCloseBtnMainListStudent }) {
    return (

        <li className="student-details">
            <div className="fields">
                <input id="input-name" type="text" />
                <label className="student-name-label" htmlFor="input-name">{name}</label>
            </div>
            <div className="fields">
                <input id="input-name" type="text" />
                <label className="student-name-label" htmlFor="input-name">
                    {surname}
                </label>
            </div>
            <div className="fields">
                <input id="input-name" type="text" />
                <label className="student-name-label" htmlFor="input-name">
                    {`${attendace}%`}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-edit">
                    Edit <span className="visually-hidden"></span>
                </button>
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

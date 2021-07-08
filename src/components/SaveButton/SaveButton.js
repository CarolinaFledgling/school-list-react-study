import React from 'react'

export default function SaveButton({ onSaveHandler, id, inputSaveName, inputSaveSurname, inputSaveAttendace, inputSaveIsActive }) {

    const handlerSaveStudent = () => {
        onSaveHandler(id, inputSaveName, inputSaveAttendace, inputSaveSurname, inputSaveIsActive)
    }
    return (
        <button type="button" className="btn btn-edit" onClick={handlerSaveStudent}>Save</button>
    )
}

import React from 'react'

export default function SaveButton({ onSaveHandler, id, inputSaveName, inputSaveSurname, inputSaveAttendace }) {

    const handlerSaveStudent = () => {
        onSaveHandler(id, inputSaveName, inputSaveAttendace, inputSaveSurname)
    }
    return (
        <button type="button" className="btn btn-edit" onClick={handlerSaveStudent}>Save</button>
    )
}

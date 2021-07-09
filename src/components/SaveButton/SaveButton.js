import React from 'react'

export default function SaveButton({ setEditing, onSaveHandler, id, inputSaveName, inputSaveSurname, inputSaveAttendace, showEditBtnMainListStudent, inputSaveIsActive, showEditBtnSearchStudent }) {

    const handlerSaveStudent = () => {
        onSaveHandler(id, inputSaveName, inputSaveAttendace, inputSaveSurname, inputSaveIsActive)
        setEditing(false)
    }
    return (
        <div>
            {showEditBtnSearchStudent === true ? <button type='button' onClick={handlerSaveStudent}>save</button> : null}
            {showEditBtnMainListStudent === true ? <button type='button' onClick={handlerSaveStudent}>save</button> : null}
        </div>
    )
}

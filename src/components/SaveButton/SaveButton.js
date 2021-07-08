import React from 'react'

export default function SaveButton({ onSaveHandler, id, inputSaveName, inputSaveSurname, inputSaveAttendace, showEditBtnMainListStudent, inputSaveIsActive, showEditBtnSearchStudent }) {

    const handlerSaveStudent = () => {
        onSaveHandler(id, inputSaveName, inputSaveAttendace, inputSaveSurname, inputSaveIsActive)
    }
    return (
        <div>
            {showEditBtnSearchStudent === true ? <button type='button' onClick={handlerSaveStudent}>save/edit</button> : null}
            {showEditBtnMainListStudent === true ? <button type='button' onClick={handlerSaveStudent}>save/edit</button> : null}
            {/* <button type="button" className="btn btn-edit" onClick={handlerSaveStudent}>Save</button> */}
        </div>
    )
}

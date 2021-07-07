import React from 'react'

export default function SaveButton({ onSaveHandler, id, inputSaveName, name }) {

    const handlerSaveStudent = () => {
        onSaveHandler(id, inputSaveName, name)
    }
    return (
        <button type="button" className="btn btn-edit" onClick={handlerSaveStudent}>Save</button>
    )
}

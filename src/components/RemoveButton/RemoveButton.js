import React from 'react'


function RemoveButton({ onDeleteStudent, id }) {

    const handlerDeleteStudent = () => {
        onDeleteStudent(id)
    }
    return (
        <button type='button' onClick={handlerDeleteStudent}>X</button>
    )
}



export default RemoveButton


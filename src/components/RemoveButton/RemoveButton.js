import React from 'react'


function RemoveButton({ onDeleteStudent, id, showCloseBtn }) {

    const handlerDeleteStudent = () => {
        onDeleteStudent(id)
    }
    return (
        showCloseBtn === true ? <button type='button' onClick={handlerDeleteStudent}>X</button> : null
    )
}


export default RemoveButton


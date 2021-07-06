import React from 'react'


function RemoveButton({ onDeleteStudent, id, showCloseBtnSearchStudent,showCloseBtnMainListStudent }) {

    console.log('Komponent removeBrn', showCloseBtnSearchStudent)
    const handlerDeleteStudent = () => {
        onDeleteStudent(id)
    }
    return (
        <div>
        {showCloseBtnSearchStudent === true ? <button type='button' onClick={handlerDeleteStudent}>X</button> : null}
        {showCloseBtnMainListStudent === true ? <button type='button' onClick={handlerDeleteStudent}>X</button> : null}
        </div>
    )
}


export default RemoveButton


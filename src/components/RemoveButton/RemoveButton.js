import React from 'react'
import styles from './RemoveButton.module.scss'


function RemoveButton({ onDeleteStudent, id, showCloseBtnSearchStudent, showCloseBtnMainListStudent }) {


    const handlerDeleteStudent = () => {
        onDeleteStudent(id)
    }
    return (
        <div>
            {/* zapytac sie dlaczego btninViewTemp klasa nie dziala w stylach  */}
            {showCloseBtnSearchStudent === true ? <button className={`${styles.button} ${styles.btninViewTemp}`} type='button' onClick={handlerDeleteStudent}>X</button> : null}
            {showCloseBtnMainListStudent === true ? <button className={styles.button} type='button' onClick={handlerDeleteStudent}>X</button> : null}
        </div>
    )
}


export default RemoveButton


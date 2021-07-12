import React from 'react'
import styles from './SaveButton.module.scss'

export default function SaveButton({ setEditing, onSaveHandler, id, inputSaveName, inputSaveSurname, inputSaveAttendace, showEditBtnMainListStudent, inputSaveIsActive, showEditBtnSearchStudent }) {

    const handlerSaveStudent = () => {
        onSaveHandler(id, inputSaveName, inputSaveAttendace, inputSaveSurname, inputSaveIsActive)
        setEditing(false)
    }
    return (
        <div>
            {showEditBtnSearchStudent === true ? <button className={styles.button} type='button' onClick={handlerSaveStudent}>save</button> : null}
            {showEditBtnMainListStudent === true ? <button className={styles.button} type='button' onClick={handlerSaveStudent}>save</button> : null}
        </div>
    )
}

import React from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'
import EditButton from '../EditButton/EditButton'
import styles from './ViewTemplate.module.scss'


export default function ViewTemplate({ inputSaveName, inputSaveSurname, inputSaveAttendace, inputSaveIsActive, onDeleteStudent, id, showCloseBtnSearchStudent, showCloseBtnMainListStudent, setEditing, isEditing }) {
    return (
        <>
            <ul className={styles.list}>
                <li>{inputSaveName}</li>
                <li>{inputSaveSurname}</li>
                <li>{inputSaveAttendace} %</li>
                <div>
                    {inputSaveIsActive === true ? <label htmlfor="active">Active</label> : <label htmlfor="active">Inactive</label>}

                </div>
            </ul>
            <div className={styles.buttons}>
                <RemoveButton
                    onDeleteStudent={onDeleteStudent}
                    id={id}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                />
                <EditButton setEditing={setEditing} isEditing={isEditing} />
            </div>
        </>
    )
}

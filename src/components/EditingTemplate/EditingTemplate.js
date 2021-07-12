import React from 'react'
import styles from './EditingTemplate.module.scss'
import SaveButton from '../SaveButton/SaveButton'
import EditButton from '../EditButton/EditButton'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function EditingTemplate({ setEditing,
    showEditBtnMainListStudent,
    showEditBtnSearchStudent,
    id,
    onSaveHandler,
    inputSaveName,
    setInputSaveName,
    inputSaveSurname,
    setInputSaveSurname,
    inputSaveAttendace,
    setInputSaveAttendace,
    inputSaveIsActive,
    setInputSaveIsActive,
    onDeleteStudent,
    showCloseBtnSearchStudent,
    showCloseBtnMainListStudent,
    isEditing,

}) {
    return (
        <div className={styles.itemStudents}>
            <ul className={styles.boxFields}>
                <li className="fields">
                    <label className={styles.label} htmlFor="input-name">Name:&nbsp;</label>
                    <input className={styles.input} value={inputSaveName} onChange={(e) => setInputSaveName(e.target.value)} id="input-name" type="text" />
                </li>
                <li className="fields">
                    <label className={styles.label} htmlFor="input-name">
                        Surname:&nbsp;
                    </label>
                    <input className={styles.input} value={inputSaveSurname} onChange={(e) => setInputSaveSurname(e.target.value)} id="input-name" type="text" />
                </li>
                <li className="fields">
                    <label className={styles.label} htmlFor="input-name">
                        Attendace:&nbsp;
                    </label>
                    <input className={styles.input} value={inputSaveAttendace} onChange={(e) => setInputSaveAttendace(e.target.value)} id="input-name" type="text" />
                </li>
                <li>
                    <label htmlfor="active">Active</label>
                    <input
                        className={styles.checkboxInput}
                        type="checkbox"
                        name="active"
                        checked={inputSaveIsActive}
                        onChange={(e) => setInputSaveIsActive(e.target.checked)} />
                </li>
            </ul>
            <div className={styles.buttons}>
                <SaveButton
                    onSaveHandler={onSaveHandler}
                    id={id}
                    inputSaveName={inputSaveName}
                    inputSaveSurname={inputSaveSurname}
                    inputSaveAttendace={inputSaveAttendace}
                    inputSaveIsActive={inputSaveIsActive}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    setEditing={setEditing}
                />
                <RemoveButton
                    onDeleteStudent={onDeleteStudent}
                    id={id}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                />
                <EditButton setEditing={setEditing} isEditing={isEditing} />
            </div>

        </div>
    )
}

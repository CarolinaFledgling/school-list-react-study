import React, { useState, useEffect } from 'react'
import EditingTemplate from '../EditingTemplate/EditingTemplate'
import ViewTemplate from '../ViewTemplate/ViewTemplate'
import styles from './StudentInfo.module.scss'



export default function StudentInfo({ student, handlers, flags }) {
    const { id, name, surname, attendace, isActive } = student
    const { onDelete, onSave } = handlers
    const {
        showCloseBtnSearchStudent,
        showEditBtnSearchStudent,
        showCloseBtnMainListStudent,
        showEditBtnMainListStudent
    } = flags

    const [inputSaveName, setInputSaveName] = useState(name)
    const [inputSaveSurname, setInputSaveSurname] = useState(surname)
    const [inputSaveAttendace, setInputSaveAttendace] = useState(attendace)
    const [inputSaveIsActive, setInputSaveIsActive] = useState(isActive)
    const [isEditing, setEditing] = useState(false);



    return (

        <div className={styles.container}>
            {isEditing ? (
                <EditingTemplate
                    inputSaveName={inputSaveName}
                    setInputSaveName={setInputSaveName}
                    inputSaveSurname={inputSaveSurname}
                    setInputSaveSurname={setInputSaveSurname}
                    inputSaveAttendace={inputSaveAttendace}
                    setInputSaveAttendace={setInputSaveAttendace}
                    inputSaveIsActive={inputSaveIsActive}
                    setInputSaveIsActive={setInputSaveIsActive}
                    onSaveHandler={onSave}
                    id={id}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    setEditing={setEditing}
                    onDeleteStudent={onDelete}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                    isEditing={isEditing}
                />
            ) : (
                <ViewTemplate
                    inputSaveName={inputSaveName}
                    inputSaveSurname={inputSaveSurname}
                    inputSaveAttendace={inputSaveAttendace}
                    inputSaveIsActive={inputSaveIsActive}
                    onDeleteStudent={onDelete}
                    id={id}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                    setEditing={setEditing}
                    isEditing={isEditing}
                />
            )
            }
        </div >
    )
}

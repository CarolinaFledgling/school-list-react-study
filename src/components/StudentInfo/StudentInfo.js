import React, { useState, useEffect } from 'react'
import EditingTemplate from '../EditingTemplate/EditingTemplate'
import ViewTemplate from '../ViewTemplate/ViewTemplate'
import styles from './StudentInfo.module.scss'



export default function StudentInfo({ student, handlers, flags }) {
    console.log('student', student)
    const { id, name, surname, attendace, isActive } = student

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
                    onSaveHandler={handlers?.onSave}
                    id={id}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    setEditing={setEditing}

                    onDeleteStudent={handlers?.onDelete}
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
                    onDeleteStudent={handlers?.onDelete}
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

import React, { useState, useEffect } from 'react'
import EditingTemplate from '../EditingTemplate/EditingTemplate'
import ViewTemplate from '../ViewTemplate/ViewTemplate'
import styles from './StudentInfo.module.scss'



export default function StudentInfo({ isActive, name, surname, attendace, onDeleteStudent, id, showCloseBtnSearchStudent, showEditBtnSearchStudent, showCloseBtnMainListStudent, showEditBtnMainListStudent, onSaveHandler }) {
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
                    onSaveHandler={onSaveHandler}
                    id={id}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    setEditing={setEditing}
                    onDeleteStudent={onDeleteStudent}
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
                    onDeleteStudent={onDeleteStudent}
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

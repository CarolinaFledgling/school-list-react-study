import React, { useRef, useEffect } from 'react'
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

    // pierwsze uzycie useRef useEffect , dodanie focus na pierwszy input
    // przy kazdym renderze wywoła się funkcja przekazana do useeffect jesli nie podamy tablicy zaleznosci

    const inputRef = useRef();


    // useEffect(() => {
    //     console.log('inputREF inputDOM', inputRef.current)
    //     inputRef.current.focus() // przy kazdy renderze bedzie dodawal focusa 
    // })

    // Set focus when input first inout to edit is showing 
    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus()
        }
    }, [isEditing])



    //  added update document.title when isEditing changed
    useEffect(() => {
        document.title = isEditing ? `Edit name: ${inputSaveName}` : 'no editing'
    }, [isEditing, inputSaveName])



    return (
        <div className={styles.itemStudents}>
            <ul className={styles.boxFields}>
                <li className="fields">
                    <label className={styles.label} htmlFor="input-name">Name:&nbsp;</label>
                    <input ref={inputRef} className={styles.input} value={inputSaveName} onChange={(e) => setInputSaveName(e.target.value)} id="input-name" type="text" />
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
                    <label htmlFor="active">Active</label>
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
                <EditButton inputRef={inputRef} setEditing={setEditing} isEditing={isEditing} />
            </div>

        </div>
    )
}

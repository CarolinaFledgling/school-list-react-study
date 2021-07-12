import React, { useState } from 'react'
import EditButton from '../EditButton/EditButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import SaveButton from '../SaveButton/SaveButton'
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

                <li className={styles.itemStudents}>
                    <div className={styles.boxFields}>
                        <div className="fields">
                            <label className={styles.label} htmlFor="input-name">Name:&nbsp;</label>
                            <input className={styles.input} value={inputSaveName} onChange={(e) => setInputSaveName(e.target.value)} id="input-name" type="text" />
                        </div>
                        <div className="fields">
                            <label className={styles.label} htmlFor="input-name">
                                Surname:&nbsp;
                            </label>
                            <input className={styles.input} value={inputSaveSurname} onChange={(e) => setInputSaveSurname(e.target.value)} id="input-name" type="text" />
                        </div>
                        <div className="fields">
                            <label className={styles.label} htmlFor="input-name">
                                Attendace:&nbsp;
                            </label>
                            <input className={styles.input} value={inputSaveAttendace} onChange={(e) => setInputSaveAttendace(e.target.value)} id="input-name" type="text" />
                        </div>
                        <div>
                            <label htmlfor="active">Active</label>
                            <input
                                className={styles.checkboxInput}
                                type="checkbox"
                                name="active"
                                checked={inputSaveIsActive}
                                onChange={(e) => setInputSaveIsActive(e.target.checked)} />
                        </div>

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
                            {/* <button onClick={() => setEditing(!isEditing)}>Edit</button> */}

                        </div>
                    </div>
                </li>




            ) : (
                <li>
                    <p>{inputSaveName}</p>
                    <p>{inputSaveSurname}</p>
                    <p>{inputSaveAttendace} %</p>
                    <div>
                        {inputSaveIsActive === true ? <label htmlfor="active">Active</label> : <label htmlfor="active">Inactive</label>}

                    </div>
                    <RemoveButton
                        onDeleteStudent={onDeleteStudent}
                        id={id}
                        showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                        showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                    />
                    <EditButton setEditing={setEditing} isEditing={isEditing} />
                    {/* <button onClick={() => setEditing(!isEditing)}>Edit</button> */}

                </li>
            )
            }

        </div >
    )
}

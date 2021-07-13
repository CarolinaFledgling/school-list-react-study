import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'
import styles from './ListWithNewStudents.module.scss'

export default function ListWithNewStudents({ studentDetails, onDeleteStudent, showEditBtnMainListStudent, showCloseBtnSearchStudent, showEditBtnSearchStudent, showCloseBtnMainListStudent, onSaveHandler }) {


    return (
        <div className={styles.container}>
            <h2 className={styles.titleList}>List with new students ⬇️</h2>
            {// zapytac w ul : role="list" className="list-newStudent" aria-labelledby="list-heading"
            }
            <div className={styles.detailsStudent}>
                {studentDetails.map((student) => {
                    return <StudentInfo
                        student={student}
                        flags={{
                            showCloseBtnSearchStudent,
                            showCloseBtnMainListStudent,
                            showEditBtnSearchStudent,
                            showEditBtnMainListStudent,
                        }}
                        handlers={{
                            onDelete: onDeleteStudent,
                            onSave: onSaveHandler,
                        }}
                    />

                })}
            </div>
        </div>
    )
}

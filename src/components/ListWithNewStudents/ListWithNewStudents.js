import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'
import styles from './ListWithNewStudents.module.scss'

export default function ListWithNewStudents({ studentDetails, onDeleteStudent, showEditBtnMainListStudent, showCloseBtnSearchStudent, showEditBtnSearchStudent, showCloseBtnMainListStudent, onSaveHandler }) {


    return (
        <div>
            <h2 className={styles.titleList}>List with new students</h2>
            {// zapytac w ul : role="list" className="list-newStudent" aria-labelledby="list-heading"
            }
            <ul className={styles.list}>
                {studentDetails.map((student) => {
                    return <StudentInfo
                        onDeleteStudent={onDeleteStudent}
                        id={student.id}
                        name={student.name}
                        surname={student.surname}
                        attendace={student.attendace}
                        isActive={student.isActive}
                        showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                        showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                        showEditBtnSearchStudent={showEditBtnSearchStudent}
                        showEditBtnMainListStudent={showEditBtnMainListStudent}
                        onSaveHandler={onSaveHandler}

                    />
                })}
            </ul>
        </div>
    )
}

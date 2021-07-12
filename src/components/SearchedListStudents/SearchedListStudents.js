import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'
import styles from './SearchedListStudents.module.scss'


export default function SearchedListStudents({ searchedStudentList, showCloseBtnSearchStudent, showEditBtnSearchStudent }) {
    return (
        <ul className={styles.list}>
            {searchedStudentList.map((student) => {
                return <StudentInfo
                    id={student.id}
                    name={student.name}
                    surname={student.surname}
                    attendace={student.attendace}
                    isActive={student.isActive}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                />
            })}
        </ul>
    )
}

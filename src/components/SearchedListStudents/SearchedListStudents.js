import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'
import styles from './SearchedListStudents.module.scss'


export default function SearchedListStudents({ searchedStudentList, showCloseBtnSearchStudent, showEditBtnSearchStudent }) {
    return (
        <div className={styles.layoutSearchList}>
            <div className={styles.container}>
                {searchedStudentList.map((student) => {
                    return <StudentInfo
                        student={student}
                        flags={{
                            showCloseBtnSearchStudent,
                            showEditBtnSearchStudent,
                        }}

                    />
                })}
            </div>
        </div>
    )
}

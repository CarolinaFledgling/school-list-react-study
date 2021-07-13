import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'
import SearchBar from '../SearchBar/SearchBar'
import styles from './StudentsLists.module.scss'




function StudentsLists({ studentDetails, searchedStudentList, users, flags, handlers }) {
    const {
        showCloseBtnSearchStudent,
        showCloseBtnMainListStudent,
        showEditBtnSearchStudent,
        showEditBtnMainListStudent,
        setShowCloseBtnSearchStudent,
        setShowEditBtnSearchStudent,
    } = flags

    const {
        onCleanSearchlist,
        onSearchStudent,
        onDeleteStudent,
        onSaveHandler,
    } = handlers

    return (
        <div>
            <div>
                {/* <ListWithCurrentStudents users={users} /> */}
            </div>
            <div className={styles.container}>
                <ListWithNewStudents
                    studentDetails={studentDetails}
                    handlers={{
                        onDeleteStudent,
                        onSaveHandler,
                    }}
                    flags={{
                        showCloseBtnSearchStudent,
                        showCloseBtnMainListStudent,
                        showEditBtnSearchStudent,
                        showEditBtnMainListStudent,
                    }}
                />
                <SearchBar
                    studentDetails={studentDetails}
                    searchedStudentList={searchedStudentList}
                    handlers={{
                        onSearchStudent,
                        onCleanSearchlist,
                    }}
                    flags={{
                        setShowCloseBtnSearchStudent,
                        setShowEditBtnSearchStudent,
                        showCloseBtnSearchStudent,
                        showEditBtnSearchStudent,
                    }}
                />
            </div>
        </div>
    )
}



export default StudentsLists
import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'
import SearchBar from '../SearchBar/SearchBar'
import styles from './StudentsLists.module.scss'




function StudentsLists({ onCleanSearchlist, setShowEditBtnSearchStudent, setShowCloseBtnSearchStudent, onSearchStudent, users, studentDetails, onDeleteStudent, showCloseBtnSearchStudent, showEditBtnMainListStudent, showCloseBtnMainListStudent, onSaveHandler, showEditBtnSearchStudent }) {

    return (
        <div>
            <div>
                {/* <ListWithCurrentStudents users={users} /> */}
            </div>
            <div className={styles.container}>
                <ListWithNewStudents
                    onDeleteStudent={onDeleteStudent}
                    studentDetails={studentDetails}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    onSaveHandler={onSaveHandler}
                />
                <SearchBar
                    studentDetails={studentDetails}
                    onSearchStudent={onSearchStudent}
                    setShowCloseBtnSearchStudent={setShowCloseBtnSearchStudent}
                    setShowEditBtnSearchStudent={setShowEditBtnSearchStudent}
                    onCleanSearchlist={onCleanSearchlist}
                />
            </div>
        </div>
    )
}



export default StudentsLists
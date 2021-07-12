import React, { useState } from 'react'
import CleanSearchedListBtn from '../CleanSearchedListBtn/CleanSearchedListBtn'
import SearchedListStudents from '../SearchedListStudents/SearchedListStudents'
import styles from './SearchBar.module.scss'
import SearchButton from '../SearchButton/SearchButton'





export default function SearchBar({ showEditBtnSearchStudent, showCloseBtnSearchStudent, searchedStudentList, studentDetails, onSearchStudent, setShowCloseBtnSearchStudent, onCleanSearchlist, setShowEditBtnSearchStudent }) {

    const [inputSearchStudent, setinputSearchStudent] = useState('')

    const handleOnChangeSearchStudent = (e) => {
        setinputSearchStudent(e.target.value)

    }

    const handleSearchStudent = () => {
        const copyStudentDetails = [...studentDetails]
        const searchedStudent = copyStudentDetails.filter((student) => {
            return student.name.toLowerCase().includes(inputSearchStudent.toLocaleLowerCase())
        })
        onSearchStudent(searchedStudent)
        setShowCloseBtnSearchStudent(false)
        setShowEditBtnSearchStudent(false)
        setinputSearchStudent('')
    }

    const handleCleanSearchedList = () => {
        const copyStudentDetails = [...studentDetails]
        const searchedStudent = copyStudentDetails.filter((student) => {
            return student.name.toLowerCase().includes(inputSearchStudent.toLocaleLowerCase())
        })

        onCleanSearchlist(searchedStudent)
    }



    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h2 className={styles.title}>Serach Student</h2>
                <label className={styles.label} htmlfor='search-student'>Search: </label>
                <input className={styles.input} value={inputSearchStudent} onChange={handleOnChangeSearchStudent} type="text" id='search-student' placeholder='name' />
            </div>
            <div className={styles.searchButtons}>
                <SearchButton onSearchStudent={handleSearchStudent} />
                <CleanSearchedListBtn onCleanSearchedList={handleCleanSearchedList} />``
            </div>
            <div className={styles.searchedList}>
                <SearchedListStudents
                    searchedStudentList={searchedStudentList}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                />
            </div>
        </div>
    )
}



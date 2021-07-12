import React, { useState } from 'react'
import CleanSearchedListBtn from '../CleanSearchedListBtn/CleanSearchedListBtn'
import styles from './SearchBar.module.scss'





export default function SearchBar({ studentDetails, onSearchStudent, setShowCloseBtnSearchStudent, onCleanSearchlist, setShowEditBtnSearchStudent }) {

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
            <h2 className={styles.title}>Serach Student</h2>
            <label className={styles.label} htmlfor='search-student'>Search: </label>
            <input className={styles.input} value={inputSearchStudent} onChange={handleOnChangeSearchStudent} type="text" id='search-student' placeholder='name' />
            <button className={styles.buttonSearch} onClick={handleSearchStudent} type='submit'>Search</button>
            <CleanSearchedListBtn onCleanSearchedList={handleCleanSearchedList} />
        </div>
    )
}



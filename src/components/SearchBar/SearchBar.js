import React, { useState } from 'react'
import CleanSearchedListBtn from '../CleanSearchedListBtn/CleanSearchedListBtn'





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
        <div>
            <h2>Serach Your Student</h2>
            <label htmlfor='search-student'>Search: </label>
            <input value={inputSearchStudent} onChange={handleOnChangeSearchStudent} type="text" id='search-student' />
            <button onClick={handleSearchStudent} type='submit'>Search</button>
            {/* <button onClick={handleCleanSearchedList} type='submit'>clean List</button> */}
            <CleanSearchedListBtn onCleanSearchedList={handleCleanSearchedList} />
        </div>
    )
}



import React, { useState } from 'react'





export default function SearchBar({ studentDetails, onSearchStudent, setShowCloseBtnSearchStudent }) {

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
        setinputSearchStudent('')
    }



    return (
        <div>
            <h2>Serach Your Student</h2>
            <label htmlfor='search-student'>Search: </label>
            <input value={inputSearchStudent} onChange={handleOnChangeSearchStudent} type="text" id='search-student' />
            <button onClick={handleSearchStudent} type='submit'>Search</button>
        </div>
    )
}



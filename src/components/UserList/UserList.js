import React, { useState } from 'react'
import StudentLists from '../StudentLists/StudentLists'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import SearchBar from '../SearchBar/SearchBar'
import { users } from '../../data/users'
import SearchedListStudents from '../SearchedListStudents/SearchedListStudents'

// CRUD

// Create
// Read 
// Update 
// Delete 
// Search 

const UserList = (props) => {

    // create a student list 
    const [studentDetails, setStudentDetails] = useState([])
    const [searchedStudentList, setsearchedStudentList] = useState([])
    const [showCloseBtn, setShowCloseBtn] = useState(true)

    // added a new student to the list
    const onSubmitHandler = (formData) => {
        console.log('submit form , create a new student ', formData)
        setShowCloseBtn(true)
        setStudentDetails([...studentDetails, formData])
    }

    // handle delete student 

    const handlerDeleteStudent = (id) => {
        console.log('id from delte student', id)
        const filterdStudent = studentDetails.filter((student) => {
            return student.id !== id
        })

        setStudentDetails(filterdStudent)
    }

    const onSearchHandler = (searchedStudent) => {
        setShowCloseBtn(false)
        setsearchedStudentList(searchedStudent)
        console.log(searchedStudent)
    }



    return (
        <div>
            <Heading />
            <Form onSubmit={onSubmitHandler} />
            <StudentLists
                onDeleteStudent={handlerDeleteStudent}
                studentDetails={studentDetails}
                users={users}
                showCloseBtn={showCloseBtn} />
            <SearchBar
                studentDetails={studentDetails}
                onSearchStudent={onSearchHandler} />
            <SearchedListStudents
                searchedStudentList={searchedStudentList}
                showCloseBtn={showCloseBtn} />
        </div>
    )
}

export default UserList
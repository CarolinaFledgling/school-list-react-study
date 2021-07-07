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


    const [studentDetails, setStudentDetails] = useState([])
    const [searchedStudentList, setsearchedStudentList] = useState([])
    const [showCloseBtnSearchStudent, setShowCloseBtnSearchStudent] = useState(true)
    const [showCloseBtnMainListStudent, setshowCloseBtnMainListStudent] = useState(false)




    // added a new student to the list
    const onSubmitHandler = (formData) => {
        setStudentDetails([...studentDetails, formData])
    }

    // handle delete student 

    const handlerDeleteStudent = (id) => {
        const filterdStudent = studentDetails.filter((student) => {
            return student.id !== id
        })

        setStudentDetails(filterdStudent)
    }

    // handle Searched student

    const onSearchHandler = (searchedStudent) => {
        setsearchedStudentList(searchedStudent)
    }

    //handle clean searched list

    const onCleanSearchlist = () => {
        setsearchedStudentList([])
    }

    // Amount of students 
    const namberOfStudentsNoun = studentDetails.length !== 1 ? 'students' : 'student';
    const headingText = `Number of students: ${studentDetails.length} ${namberOfStudentsNoun} on the list`;


    //  handler Edit fields 

    const onSaveHandler = (id, inputSaveName, inputSaveAttendace, inputSaveSurname) => {
        let foundElem = studentDetails.find((elem) => {
            return elem.id === id
        })

        foundElem.name = inputSaveName
        foundElem.surname = inputSaveSurname
        foundElem.attendace = inputSaveAttendace

        setStudentDetails([...studentDetails])


    }

    // Active checkbox
    const onActiveInputHandler = (activeCheckboxInput) => {
        console.log('activeCheckboxInput', activeCheckboxInput)
    }

    return (
        <div>
            <Heading headingText={headingText} />
            <Form
                onSubmit={onSubmitHandler}
                setshowCloseBtnMainListStudent={setshowCloseBtnMainListStudent}
                setShowCloseBtnSearchStudent={setShowCloseBtnSearchStudent}
                onActiveInputHandler={onActiveInputHandler}
                />
            <StudentLists
                onDeleteStudent={handlerDeleteStudent}
                studentDetails={studentDetails}
                users={users}
                showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                onSaveHandler={onSaveHandler}
                onActiveInputHandler={onActiveInputHandler}
            />
            <SearchBar
                studentDetails={studentDetails}
                onSearchStudent={onSearchHandler}
                setShowCloseBtnSearchStudent={setShowCloseBtnSearchStudent}
                onCleanSearchlist={onCleanSearchlist} />
            <SearchedListStudents
                searchedStudentList={searchedStudentList}
                showCloseBtnSearchStudent={showCloseBtnSearchStudent}
            />
        </div>
    )
}

export default UserList
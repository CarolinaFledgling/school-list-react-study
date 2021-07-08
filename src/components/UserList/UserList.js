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
    const [showEditBtnSearchStudent, setShowEditBtnSearchStudent] = useState(true)
    const [showEditBtnMainListStudent, setshowEditBtnMainListStudent] = useState(false)

    const [countActiveStudent, setcountActiveStudent] = useState(0)





    // added a new student to the list
    const onSubmitHandler = (formData) => {
        console.log('student po dodaniu', formData)
        if (formData.isActive === true) {
            setcountActiveStudent(countActiveStudent + 1)
        }
        console.log('liczba aktywnych', countActiveStudent)
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
    const onSaveHandler = (id, inputSaveName, inputSaveAttendace, inputSaveSurname, inputSaveIsActive) => {
        let foundElem = studentDetails.find((elem) => {
            return elem.id === id
        })
        foundElem.name = inputSaveName
        foundElem.surname = inputSaveSurname
        foundElem.attendace = inputSaveAttendace
        foundElem.isActive = inputSaveIsActive
        console.log('foundElem.isActive', foundElem.isActive)
        setStudentDetails([...studentDetails])


    }


    // Amount of Active and Inactive students
    // Count Active student
    const namberOfStudentsActive = countActiveStudent === 0 ? ' no active students on the list 😥' : ` ${countActiveStudent} ✔️`;
    console.log(studentDetails)

    return (

        <div>
            <Heading headingText={headingText} namberOfStudentsActive={namberOfStudentsActive} />
            <Form
                onSubmit={onSubmitHandler}
                setshowCloseBtnMainListStudent={setshowCloseBtnMainListStudent}
                setShowCloseBtnSearchStudent={setShowCloseBtnSearchStudent}
                setShowEditBtnSearchStudent={setShowEditBtnSearchStudent}
                setshowEditBtnMainListStudent={setshowEditBtnMainListStudent}



            />
            <StudentLists
                onDeleteStudent={handlerDeleteStudent}
                studentDetails={studentDetails}
                users={users}
                showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                showEditBtnSearchStudent={showEditBtnSearchStudent}
                showEditBtnMainListStudent={showEditBtnMainListStudent}
                onSaveHandler={onSaveHandler}

            />
            <SearchBar
                studentDetails={studentDetails}
                onSearchStudent={onSearchHandler}
                setShowCloseBtnSearchStudent={setShowCloseBtnSearchStudent}
                setShowEditBtnSearchStudent={setShowEditBtnSearchStudent}
                onCleanSearchlist={onCleanSearchlist} />
            <SearchedListStudents
                searchedStudentList={searchedStudentList}
                showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                showEditBtnSearchStudent={showEditBtnSearchStudent}
            />
        </div>
    )
}

export default UserList
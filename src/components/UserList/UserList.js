import React, { useState } from 'react'
import StudentLists from '../StudentLists/StudentLists'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import { users } from '../../data/users'


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



    // added a new student to the list
    const onSubmitHandler = (formData) => {
        setStudentDetails([...studentDetails, formData])
    }

    // handle delete student 
    const onDeleteStudent = (id) => {
        const filterdStudent = studentDetails.filter((student) => {
            return student.id !== id
        })

        setStudentDetails(filterdStudent)
    }

    // handle Searched student
    const onSearchStudent = (searchedStudent) => {
        setsearchedStudentList(searchedStudent)
    }

    //handle clean searched list
    const onCleanSearchlist = () => {
        setsearchedStudentList([])
    }

    // Amount of students 
    const namberOfStudentsNoun = studentDetails.length !== 1 ? 'students' : 'student';
    const headingText = `${studentDetails.length} ${namberOfStudentsNoun}`;


    //  handler Edit fields 
    const onSaveHandler = (id, inputSaveName, inputSaveAttendace, inputSaveSurname, inputSaveIsActive) => {
        let foundElem = studentDetails.find((elem) => {
            return elem.id === id
        })
        foundElem.name = inputSaveName
        foundElem.surname = inputSaveSurname
        foundElem.attendace = inputSaveAttendace
        foundElem.isActive = inputSaveIsActive
        setStudentDetails([...studentDetails])
    }


    // Amount of Active and Inactive students
    // Count Active student 
    const countActiveStudent = studentDetails.reduce((currentStudent, nextStudent) => {

        if (nextStudent.isActive) {
            return currentStudent + 1;
        }
        return currentStudent
    }, 0)

    const namberOfStudentsActive = countActiveStudent === 0 ? ' 0 active students' : ` ${countActiveStudent} ✔️`;


    // Amount of InActive and Inactive students
    // Count InActive student 
    const countInactiveStudent = studentDetails.reduce((currentStudent, nextStudent) => {

        if (nextStudent.isActive === false) {
            return currentStudent + 1;
        }
        return currentStudent
    }, 0)

    const namberOfStudentsInactive = countInactiveStudent === 0 ? '0 inactive students' : ` ${countInactiveStudent} ✔️`;



    return (

        <div>
            <Heading
                headingText={headingText}
                namberOfStudentsActive={namberOfStudentsActive}
                namberOfStudentsInactive={namberOfStudentsInactive} />
            <Form
                flags={{
                    setshowCloseBtnMainListStudent,
                    setShowCloseBtnSearchStudent,
                    setShowEditBtnSearchStudent,
                    setshowEditBtnMainListStudent,
                }}
                onSubmit={onSubmitHandler}

            />
            <StudentLists
                studentDetails={studentDetails}
                searchedStudentList={searchedStudentList}
                users={users}
                flags={{
                    showCloseBtnSearchStudent,
                    showCloseBtnMainListStudent,
                    showEditBtnSearchStudent,
                    showEditBtnMainListStudent,
                    setShowCloseBtnSearchStudent,
                    setShowEditBtnSearchStudent,
                }}
                handlers={{
                    onCleanSearchlist,
                    onSearchStudent,
                    onDeleteStudent,
                    onSaveHandler,
                }}
            />

        </div>
    )
}

export default UserList
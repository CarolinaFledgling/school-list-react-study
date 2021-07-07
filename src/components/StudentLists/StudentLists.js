import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'



function StudentsListItem({ users, studentDetails, onDeleteStudent, showCloseBtnSearchStudent, showCloseBtnMainListStudent, onSaveHandler, onActiveInputHandler }) {

    return (
        <div>
            <div>
                {/* <ListWithCurrentStudents users={users} /> */}
            </div>
            <div>
                <hr></hr>
                <ListWithNewStudents
                    onDeleteStudent={onDeleteStudent}
                    studentDetails={studentDetails}
                    showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                    showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                    onSaveHandler={onSaveHandler}
                    onActiveInputHandler={onActiveInputHandler}
                />
            </div>
        </div>
    )
}



export default StudentsListItem
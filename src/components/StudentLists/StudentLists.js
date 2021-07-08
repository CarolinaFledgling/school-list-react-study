import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'



function StudentsListItem({ users, studentDetails, onDeleteStudent, showCloseBtnSearchStudent,showEditBtnMainListStudent, showCloseBtnMainListStudent, onSaveHandler, showEditBtnSearchStudent }) {

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
                    showEditBtnSearchStudent={showEditBtnSearchStudent}
                    showEditBtnMainListStudent={showEditBtnMainListStudent}
                    onSaveHandler={onSaveHandler}

                />
            </div>
        </div>
    )
}



export default StudentsListItem
import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'



function StudentsListItem({ users, studentDetails, onDeleteStudent, showCloseBtn }) {

    return (
        <div>
            <div>
                {/* <ListWithCurrentStudents users={users} /> */}
            </div>
            <div>
                <hr></hr>
                <ListWithNewStudents onDeleteStudent={onDeleteStudent} studentDetails={studentDetails} showCloseBtn={showCloseBtn} />
            </div>
        </div>
    )
}



export default StudentsListItem
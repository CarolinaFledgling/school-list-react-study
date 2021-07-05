import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'



function StudentsListItem({ users, studentDetails }) {

    return (
        <div>
            <div>
                {/* <ListWithCurrentStudents users={users} /> */}
            </div>
            <div>
                <hr></hr>
                <ListWithNewStudents studentDetails={studentDetails} />
            </div>
        </div>
    )
}



export default StudentsListItem
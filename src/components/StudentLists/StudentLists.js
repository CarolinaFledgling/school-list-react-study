import React from 'react'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'



function StudentsListItem({ users }) {

    return (
        <div>
            <div>
                <ListWithCurrentStudents users={users} />
            </div>
            <div>
                <hr></hr>
                <ListWithNewStudents />
            </div>
        </div>
    )
}



export default StudentsListItem
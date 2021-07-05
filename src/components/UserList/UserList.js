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

    // create a sttudent list 
    const [studentDetails, setStudentDetails] = useState([])


    const onSubmitHandler = (formData) => {
        console.log(formData)
        setStudentDetails([...studentDetails, formData])
    }

    return (
        <div>
            <Heading />
            <Form onSubmit={onSubmitHandler} />
            <StudentLists studentDetails={studentDetails} users={users} />
        </div>
    )
}

export default UserList
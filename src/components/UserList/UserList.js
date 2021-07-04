import React, { useState } from 'react'
import StudentLists from '../StudentLists/StudentLists'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import { users } from '../../data/users'



const UserList = (props) => {


    // tworzenie tablicy z podstawowymi danymi o uczniu
    const [studentDetails, setStudentDetails] = useState([])


    const onSubmitHandler = (formData) => {
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
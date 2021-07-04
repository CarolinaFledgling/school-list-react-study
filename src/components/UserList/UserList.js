import React, { useState, useEffect } from 'react'
import { users as usersData } from '../../data/users'
import StudentsListItem from '../StudentsListItem/StudentsListItem'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import { users } from '../../data/users'



const UserList = (props) => {



    // Formularz
    //  pobieranie wartosci z inputa , czy to nie moze byc w FORM ?
    const [inputNameText, setInputNameText] = useState('')

    // tworzenie tablicy z podstawowymi danymi o uczniu
    const [studentDetails, setStudentDetails] = useState([])




    return (
        <div>
            <Heading />
            <Form
                inputNameText={inputNameText}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
                setInputNameText={setInputNameText} />

            <StudentsListItem
                inputNameText={inputNameText}
                setInputNameText={setInputNameText}
                studentDetails={studentDetails}
                users={users} />

        </div>
    )
}




export default UserList
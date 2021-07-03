import React, { useState, useEffect } from 'react'
import { users as usersData } from '../../data/users'
import StudentsListItem from '../StudentsListItem/StudentsListItem'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import { users } from '../../data/users'



const UserList = (props) => {

    // const handleDeletePerson = (name) => {
    //     const filteredUsers = users.filter(user => user.name !== name)
    //     setUsers(filteredUsers)

    // }

    // Formularz
    //  pobieranie wartosci z inputa 
    const [inputNameText, setInputNameText] = useState('')

    // tworzenie tablicy z podstawowymi danymi o uczniu
    const [studentDetails, setStudentDetails] = useState([])


    // Heading
    // zapytac sie gdzie powinnam ustawic stan np chce po kliknieciu zmienić tytuł?

    const [valueTitle, setValueTitle] = useState('students')

    const handlerChangeTitle = () => {
        console.log('działa')
        setValueTitle('teachers')
    }



    return (
        <div>
            {/* <h1>list: {valueTitle}</h1>
            <button onClick={handlerChangeTitle}>change</button> */}

            <Heading valueTitle={valueTitle} handlerChangeTitle={handlerChangeTitle} />
            <Form
                inputNameText={inputNameText}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
                setInputNameText={setInputNameText} />

            <StudentsListItem studentDetails={studentDetails} users={users} />

        </div>
    )
}




export default UserList
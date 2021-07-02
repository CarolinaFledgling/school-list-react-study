import React from 'react'
import { users } from '../../data/users'
import StudentsListItem from '../StudentsListItem/StudentsListItem'
import Form from '../Form/Form'



function UserList() {
    return (
        <div>
            <div>
                <h1>Simple List</h1>
            </div>
            <Form />
            <ul>
                {users.map(({ name, surname, average, attendance = '0%' }, index) => (
                    <StudentsListItem index={index} name={name} surname={surname} attendance={attendance} average={average} />
                ))}
            </ul>
        </div>
    )
}


export default UserList
import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'

export default function ListWithCurrentStudents({ users }) {
    return (
        <div>
            <h2>List with current students:</h2>
            {users.map((user) => {
                return < StudentInfo name={user.name} surname={user.surname} attendance={user.attendance} />
            })}
        </div>
    )
}

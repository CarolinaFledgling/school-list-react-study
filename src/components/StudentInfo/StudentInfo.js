import React from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function StudentInfo({ name, surname, attendace, onDeleteStudent, id }) {
    return (
        <ul>
            <li>
                <p>Name: <span className='list-item'>{name}</span></p>
                <p>Surname: <span className='list-item'>{surname}</span></p>
                <p>Attendance: <span className='list-item'>{attendace}%</span></p>
            </li>
            <RemoveButton onDeleteStudent={onDeleteStudent} id={id} />
        </ul>
    )
}

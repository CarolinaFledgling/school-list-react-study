import React from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function StudentInfo(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.attendance}</p>
            <RemoveButton />
        </div>
    )
}

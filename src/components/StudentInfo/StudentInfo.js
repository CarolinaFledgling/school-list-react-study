import React from 'react'
import Button from '../Button/Button'

export default function StudentInfo(props) {
    return (
        <div>
            <p>{props.name}</p>
            <Button handleRemove={props.handleRemove} index={props.index} />
        </div>
    )
}

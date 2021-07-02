import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'



function StudentsListItem(props) {
    return (
        <li>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Attendance: {props.attendance}</p>
            <Button handleRemove={props.handleRemove} index={props.index} />
        </li>
    )
}

StudentsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    attendance: PropTypes.string,


}

export default StudentsListItem
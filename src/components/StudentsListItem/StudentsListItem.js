import React from 'react'
import PropTypes from 'prop-types'


function StudentsListItem(props) {
    return (
        <li>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Attendance: {props.attendance}</p>
            <button>X</button>
        </li>
    )
}

StudentsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    attendance: PropTypes.string,


}

export default StudentsListItem
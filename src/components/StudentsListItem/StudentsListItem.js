import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import StudentInfo from '../StudentInfo/StudentInfo'



function StudentsListItem(props) {
    console.log(props.users)
    return (
        <div>
            <div>
                <h2>Participants:</h2>
                <p>Name: {props.users[1].name}</p>
                <p>Surname: {props.users[1].surname}</p>
                <p> Attendance: {props.users[1].attendance}</p>
                <p>Name: {props.users[2].name}</p>
                <p>Surname: {props.users[2].surname}</p>
                <p> Attendance: {props.users[2].attendance}</p>

            </div>
            <div>
                <hr></hr>
                <h2> New Participants: </h2>
                {props.studentDetails.map((student) => (
                    <StudentInfo name={student.name} />
                ))}
                {/* <Button handleRemove={props.handleRemove} index={props.index} /> */}
            </div>
        </div>
    )
}

StudentsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    attendance: PropTypes.string,


}

export default StudentsListItem
import React from 'react'
import PropTypes from 'prop-types'
import StudentInfo from '../StudentInfo/StudentInfo'
import ListWithCurrentStudents from '../ListWithCurrentStudents/ListWithCurrentStudents'
import ListWithNewStudents from '../ListWithNewStudents/ListWithNewStudents'



function StudentsListItem({ users }) {

    return (
        <div>
            <div>
                <ListWithCurrentStudents users={users} />
            </div>
            <div>
                <hr></hr>
                <ListWithNewStudents />
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
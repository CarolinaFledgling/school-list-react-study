import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'

export default function ListWithNewStudents({ studentDetails }) {
    return (
        <div>
            <h2>List With new students</h2>
            {studentDetails.map((student) => {
                return <StudentInfo name={student.name} surname={student.surname} attendace={student.attendace} />
            })}
        </div>
    )
}
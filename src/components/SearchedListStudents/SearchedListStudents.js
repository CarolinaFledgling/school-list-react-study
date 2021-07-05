import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'

export default function SearchedListStudents({ searchedStudentList }) {
    return (
        <div>
            {searchedStudentList.map((student) => {
                return <StudentInfo id={student.id} name={student.name} surname={student.surname} attendace={student.attendace} />
            })}
        </div>
    )
}

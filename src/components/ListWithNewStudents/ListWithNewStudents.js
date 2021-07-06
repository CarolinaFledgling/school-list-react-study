import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'

export default function ListWithNewStudents({ studentDetails, onDeleteStudent, showCloseBtnSearchStudent, showCloseBtnMainListStudent }) {


    return (
        <div>
            <h2>List With new students</h2>
            {// zapytac w ul : role="list" className="list-newStudent" aria-labelledby="list-heading"
            }
            <ul>
                {studentDetails.map((student) => {
                    return <StudentInfo
                        onDeleteStudent={onDeleteStudent}
                        id={student.id}
                        name={student.name}
                        surname={student.surname}
                        attendace={student.attendace}
                        showCloseBtnSearchStudent={showCloseBtnSearchStudent}
                        showCloseBtnMainListStudent={showCloseBtnMainListStudent}
                    />
                })}
            </ul>
        </div>
    )
}

import React from 'react'
import { ROUTES } from '../../routes/routes'
import { Link } from 'react-router-dom'

export default function StudentList({students}) {
  return (
    <div>
        <h2>Student List</h2>
        <ul>
            {students.map((student) => (       
                <li key={`student-${student.id}`}>
                    <Link to={ROUTES.studentDetails.path.replace(':id', student.id)} >{student.firstName} {student.lastName}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

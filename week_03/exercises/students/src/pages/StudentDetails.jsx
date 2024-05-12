import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import allStudents from '../data/students';
import Student from '../components/students/Student';

export default function StudentDetails() {
    const { id } = useParams();
    console.log('id van student', id);

    const [student, setStudent] = useState(null);

    useEffect(() => {
        const newStudent = allStudents.filter((student) => 
             student.id === id
        );
        console.log('newStudent', newStudent);
        setStudent(newStudent[0]);
    }, []);

  return (
    <div>
        {student && <Student student={student} />}
    </div>
  )
}

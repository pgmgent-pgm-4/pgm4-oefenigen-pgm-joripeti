import React, { useState, useEffect } from 'react'
import allStudents from '../data/students';
import StudentList from '../components/students/StudentList';
import StudentSearchForm from '../components/students/StudentSearchForm'

export default function Students() {
    console.log(allStudents);
    const [students, setStudents] = useState(allStudents);
    const [filteredStudents, setFilteredStudents] = useState(allStudents);
    const [inputSearch, setInputSearch] = useState('');
  
    useEffect(() => {
        // students en filteredStudents niet rechtstreeks aanpassen, daarom een nieuwe variabele newStudents aanmaken
        const newStudents = students.filter((student) => {
             return student.firstName.toLowerCase().includes(inputSearch.toLowerCase()) || 
             student.lastName.toLowerCase().includes(inputSearch.toLowerCase());
        })
        setFilteredStudents(newStudents);
    }, [students, inputSearch]);

    return (
    <div>
        <StudentSearchForm
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}/>
        <StudentList students={filteredStudents} />
    </div>
  )
}

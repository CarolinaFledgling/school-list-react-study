import React from 'react'
import SearchedListStudents from '../SearchedListStudents/SearchedListStudents'



export default function SearchBar({ onSearchStudent }) {

    const handleSearchStudent = (name) => {
        onSearchStudent(name)
    }
    return (
        <div>
            <h2>Serach Your Student</h2>
            <label htmlfor='search-student'>Search: </label>
            <input type="search" id='search-student' />
            <button onClick={handleSearchStudent} type='submit'>Search</button>
            <SearchedListStudents />
        </div>
    )
}



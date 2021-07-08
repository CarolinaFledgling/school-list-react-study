import React, { useState } from 'react'
import ChangeTitleButton from '../ChangeTitleButton/ChangeTitleButton'
import './Heading.css'

export default function Heading({ headingText, namberOfStudentsActive }) {

    const [titleList, setTitleList] = useState('Students from school nr 10')


    const handleChangeTitle = () => {
        setTitleList('No Students title')
    }

    return (
        <div className='heading-content'>
            <h1>List: <span className='heading-title'>{titleList}</span></h1>
            <h2>{headingText}</h2>
            <h3>Active Students:{namberOfStudentsActive}</h3>
            <ChangeTitleButton onChangeTitle={handleChangeTitle} />
        </div>
    )
}

import React, { useState } from 'react'
import ChangeTitleButton from '../ChangeTitleButton/ChangeTitleButton'
import './Heading.css'

export default function Heading(props) {

    //  zapytać sie dlaczego to tutaj nie działa 

    // const [valueTitle, setValueTitle] = useState('students')

    // const handlerChangeTitle = () => {
    //     setValueTitle('teachers')
    // }


    // 

    const handleChange = () => {
        props.handlerChangeTitle()
    }

    return (
        <div className='heading-content'>
            <h1>List: {props.valueTitle} </h1>
            <ChangeTitleButton onClick={handleChange} />

        </div>
    )
}

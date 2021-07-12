import React, { useEffect } from 'react'
import styles from './EditButton.module.scss'

export default function EditButton({ setEditing, isEditing, inputRef }) {


    const handleOnEditButton = () => {
        // console.log(inputRef.current.focus()) dlaczego to tutaj nie działa?
        setEditing(!isEditing)
    }
    return (
        <div>
            <button className={styles.button} type='button' onClick={handleOnEditButton}>Edit</button>
        </div>
    )
}

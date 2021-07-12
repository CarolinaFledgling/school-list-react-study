import React from 'react'
import styles from './EditButton.module.scss'

export default function EditButton({ setEditing, isEditing }) {
    const handleOnEditButton = () => {
        setEditing(!isEditing)
    }
    return (
        <div>
            <button className={styles.button} type='button' onClick={handleOnEditButton}>Edit</button>
        </div>
    )
}

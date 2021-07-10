import React from 'react'
import styles from './AddButton.module.scss'



function AddButton({ handlerAddPerson }) {
    return (
        <div>
            <button className={styles.addButton} type='submit' onClick={handlerAddPerson}>Dodaj</button>
        </div>
    )
}



export default AddButton


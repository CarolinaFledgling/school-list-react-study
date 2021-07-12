import React from 'react'
import styles from './CleanSearchedListBtn.module.scss'

export default function CleanSearchedListBtn({ onCleanSearchedList }) {
    return (
        <div>
            <button className={styles.button} onClick={onCleanSearchedList}>Clean list</button>
        </div>
    )
}

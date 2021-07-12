import React from 'react'
import styles from './SearchButton.module.scss'

export default function SearchButton({onSearchStudent}) {
    return (
        <>
            <button className={styles.buttonSearch} onClick={onSearchStudent} type='submit'>Search</button>
        </>
    )
}

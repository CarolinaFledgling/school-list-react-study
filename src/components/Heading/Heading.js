import React from 'react'
import styles from './Heading.module.scss'


export default function Heading({ headingText, namberOfStudentsActive, namberOfStudentsInactive }) {

    return (
        <div className={`${styles.container} ${false ? styles.hasBorder : styles.hasBgc}`}>
            <h1 className={styles.title}>List of students at school 🧑‍🎓</h1>
            <div className={styles.content}>
                <div className={styles.boxText}>
                    <p className={styles.paragraph}>Total:
                        <span className={styles.span}>{headingText}</span>
                    </p>
                </div>
                <div className={styles.boxText}>
                    <p className={styles.paragraph}>Active:
                        <span className={styles.span}>{namberOfStudentsActive}</span>
                    </p>
                </div>
                <div className={styles.boxText}>
                    <p className={styles.paragraph}>No Active:
                        <span className={styles.span}>{namberOfStudentsInactive}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

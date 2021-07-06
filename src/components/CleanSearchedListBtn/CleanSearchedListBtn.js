import React from 'react'

export default function CleanSearchedListBtn({ onCleanSearchedList }) {
    return (
        <div>
            <button onClick={onCleanSearchedList}>Clean list</button>
        </div>
    )
}

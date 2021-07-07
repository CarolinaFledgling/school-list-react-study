import React, { useState } from 'react'

export default function ActiveInActiveCheckboxBtn({ onActiveInputHandler }) {
    const [activeCheckboxInput, setactiveCheckboxInput] = useState(true)


    const handleActiveInput = (e) => {
        setactiveCheckboxInput(e.target.checked)

        // const newDetail = {
        //     ischecked: activeCheckboxInput,
        // }

        onActiveInputHandler(activeCheckboxInput)
        console.log(activeCheckboxInput)
    }


    return (
        <>
            <div>
                <label htmlfor="active">Active</label>
                <input
                    type="checkbox"
                    name="active"
                    checked={activeCheckboxInput}
                    // onChange={(e) => setactiveCheckboxInput(!activeCheckboxInput)}
                    onChange={handleActiveInput} />
            </div>
        </>
    )
}

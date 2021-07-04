import React from 'react'



function AddButton(props) {
    return (
        <div>
            <button type='submit' onClick={props.handlerAddPerson}>Dodaj</button>
        </div>
    )
}



export default AddButton


import React from 'react'



function AddButton(props) {
    return (
        <div>
            <button onClick={props.handlerAddPerson}>Dodaj</button>
        </div>
    )
}



export default AddButton


import React from 'react'



function AddButton({ handlerAddPerson }) {
    return (
        <div>
            <button type='submit' onClick={handlerAddPerson}>Dodaj</button>
        </div>
    )
}



export default AddButton


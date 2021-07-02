import React from 'react'



const showIndex = (index) => {
    alert(`student number ${index + 1}`)
}


function Button(props) {
    return (
        <button onClick={() => showIndex(props.index)}>X</button>
    )
}



export default Button


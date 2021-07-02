import React from 'react'






function Button(props) {

    // props.handlerDeletePerson = (name) => {
    //     props.handleRemove(name)
    // }

    return (
        <button type='button' onClick={() => props.handleRemove(props.name)}>X</button>
    )
}



export default Button


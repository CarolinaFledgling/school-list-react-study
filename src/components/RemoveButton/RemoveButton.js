import React from 'react'






function RemoveButton(props) {

    return (
        <button type='button' onClick={() => props.handleRemove(props.name)}>X</button>
    )
}



export default RemoveButton


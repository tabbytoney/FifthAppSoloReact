import React from 'react'

function FirstComponent(props) {
    return (
        <div>
            <h2>First Component</h2>
            <h3>Hello {props.thePropOne}</h3>
        </div>
    )
}

export default FirstComponent;
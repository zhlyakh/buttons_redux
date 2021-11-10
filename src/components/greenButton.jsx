import React from "react";

const GreenButton = (props)=>(
    // <button style={props.style || {backgroundcolor: 'green'}}>
    <button style={props.colorMode || {background: 'green'}}  onClick={props.onClick}>
        GREEN
    </button>
)

export default GreenButton;
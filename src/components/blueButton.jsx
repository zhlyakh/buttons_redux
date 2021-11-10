import React from "react";

const BlueButton = (props)=>(
    // <button style={props.style || {backgroundcolor: 'blue'}}>
    <button style={props.colorMode || {background: 'blue'}} onClick={props.onClick}>
        BLUE
    </button>
)

export default BlueButton;
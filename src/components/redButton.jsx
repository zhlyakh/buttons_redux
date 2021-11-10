import React from "react";

const RedButton = (props)=>(
    // <button style={props.style || {backgroundcolor: 'red'}}>
    <button style={props.colorMode || {background: 'red'}}  onClick={props.onClick}>
        RED
    </button>
)

export default RedButton;
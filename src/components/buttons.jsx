import React from "react";

import RedButton from "./redButton";
import GreenButton from "./greenButton";
import BlueButton from "./blueButton";

const Buttons = (props) =>(
    <div>
        <RedButton colorMode={props.colorMode} onClick={props.actionSetRed}/>
        <BlueButton colorMode={props.colorMode} onClick={props.actionSetBlue}/>
        <GreenButton colorMode={props.colorMode} onClick={props.actionSetGreen}/>
    </div>
)

export default Buttons;
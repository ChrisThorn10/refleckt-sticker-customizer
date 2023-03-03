import React from "react"
import "../styles/ColorPicker.scss";

export default function ColorPicker(props) {
    return (
        <React.Fragment>
           <div>
                <input id={props.id} type="color" name={props.id} value={props.color} />
                <label for={props.id}>{props.label}</label>
            </div>
        </React.Fragment>
    )
}

import React from 'react';
import "../styles/ColorPicker.scss";


const ColorPicker = (props) => {

    return (
           <div className="colorSwatch">
                <input id={props.id} type="color" name={props.id} value={props.color} onChange={props.onChange.bind(this, props.id, props.elemIndex)} />
                <label id={"label_"+props.id}  htmlFor={props.id}>{props.label}</label>
            </div>
    )
}

export default ColorPicker;

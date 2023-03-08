import React from "react"
import "../styles/ColorPicker.scss";

export default function ColorPicker(props) {
    const handleChange = (e) => { 
        e.preventDefault();
        const newColor = e.target.value;
        alert(newColor)
    }

    return (
        <React.Fragment>
           <div>
                <form>
                    <input id={props.id} type="color" name={props.id} value={props.color} onChange={handleChange} />
                    <label for={props.id}>{props.label}</label>
                </form>
            </div>
        </React.Fragment>
    )
}

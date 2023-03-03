import React from "react"
import Svg from './Svg'
import ColorPicker from './ColorPicker'
import "../styles/Artboard.scss";

export default function Artboard(props) {
    return (
        <div>  
            <Svg 
                hairColor = "#000000"
                skinColor = "#824836" 
                />
            <ColorPicker/>

            {/* 
            Need a json object that contains 
                svg data
                color profiles (for each print a color picker)
                    hair color, skin color, other color (for each loop)
                        hex code
                        id
                        label
            */}
        </div>
    )
}

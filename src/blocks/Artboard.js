import React, { useState } from 'react';
import Svg from './Svg';
import ColorPickerList from './ColorPickerList';
import "../styles/Artboard.scss";
import data from "../data.json";

const Artboard = (props) => {

    let colorArray = [];

    // read colors from json data file
    const colors = data.image[0].colors;

    // take the colors from the json data and push to an array
    colors.forEach((item,index)=>{
        colorArray.push(`${item.hexCode}`)
        }) 

    // create variable to pass down to child element to control the swatch color
    const [newColor, setNewColor] = useState(colorArray);

    //update swatch color when a change event is detected
    const updateColor = (id, index) => { 
        const selectedColor = document.getElementById(id).value;
        let newColorArray = colorArray;
        newColorArray[index]=selectedColor;
        setNewColor({newColorArray});  
    }

    return (
        <div>  
            <Svg svgID={data.image[0].svgID} newColor={newColor}/>
            <ColorPickerList newColor={newColor} onChange={updateColor} colors={colors}/>
        </div>
    )
}

export default Artboard;

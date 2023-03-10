import React, { useState } from 'react';
import Svg from './Svg';
import ColorPickerList from './ColorPickerList';
import "../styles/Artboard.scss";
import data from "../data.json";

const Artboard = (props) => {

    let colorArray = [];
    const colors = data.image[0].colors;

    colors.forEach((item,index)=>{
        colorArray.push(`${item.hexCode}`)
        }) 

    const [newColor, setNewColor] = useState(colorArray);

    const updateColor = (id, index) => { 
        const selectedColor = document.getElementById(id).value;
        colorArray[index]=selectedColor;
        //alert(`ID: ${id}, selectedColor: ${selectedColor}, index: ${index}, colorArray: ${colorArray}, value of newcolor: ${newColor}`)
        setNewColor(colorArray);  
    }


    return (
        <div>  
            <Svg svgID={data.image[0].svgID} />
            <ColorPickerList newColor={newColor} onChange={updateColor}/>
        </div>
    )
}

export default Artboard;

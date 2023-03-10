import React, { useState } from 'react';
//import React from 'react';
import "../styles/ColorPicker.scss";
import ColorPicker from './ColorPicker';
import data from "../data.json";


const ColorPickers = (props) => {

    const colors = data.image[0].colors;
    let colorList=[];

    colors.forEach((item,index)=>{
        colorList.push( 
            <ColorPicker 
                id={item.id} 
                color={props.newColor[index]} 
                label={item.label}
                onChange={props.onChange}
                elemIndex={index}
            />
        )
    })
 

    return (
        <div id="color-picker-list">
            {colorList}
        </div>
    )
}

export default ColorPickers;
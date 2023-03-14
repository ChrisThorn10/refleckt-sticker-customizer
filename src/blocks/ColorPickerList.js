import React, { useState } from 'react';
//import React from 'react';
import "../styles/ColorPicker.scss";
import ColorPicker from './ColorPicker';
import data from "../data.json";


const ColorPickerList = (props) => {

    let colorList=[];

    props.colors.forEach((item,index)=>{
        colorList.push( 
            <ColorPicker 
                id={"input_"+item.id} 
                color={props.newColor[index]} 
                label={item.label}
                onChange={props.onChange}
                elemIndex={index}
                key={index}
            />
        )
    })
 
    return (
        <div id="color-picker-list">
            {colorList}
        </div>
    )
}

export default ColorPickerList;

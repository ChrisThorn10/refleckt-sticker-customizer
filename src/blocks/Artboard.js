import React from "react";
import Svg from './Svg';
import ColorPicker from './ColorPicker';
import "../styles/Artboard.scss";
import data from "../data.json";

const colors = data.image[0].colors;
let colorList=[];

colors.forEach((item,index)=>{
    colorList.push( 
        <ColorPicker 
            id={item.id} 
            color={item.hexCode} 
            label={item.label}
        />
    )
})

export default function Artboard(props) {
    return (
        <div>  
            <Svg svgID={data.image[0].svgID} />
            {colorList}
        </div>
    )
}

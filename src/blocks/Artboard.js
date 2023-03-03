import React from "react"
import Svg from './Svg'
import ColorPicker from './ColorPicker'
import "../styles/Artboard.scss"
import data from "../data.json"

const colors = data.image.colors;
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
            <Svg renderData={data.image.svgID} />
            {colorList}
        </div>
    )
}

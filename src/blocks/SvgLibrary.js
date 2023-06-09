import React from "react"
import "../styles/SvgLibrary.scss";
import Svg from "./Svg";
import data from "../data.json";


export default function SvgLibrary(props) {
    let svgList = [];
    
    let randHairColor = data.defaultColors.hair;
    let randSkinColor = data.defaultColors.skin;

    let numHairColors = data.defaultColors.hair.length;
    let numSkinColors = data.defaultColors.skin.length;

    props.data.images.forEach((item,index)=>{
        svgList.push( 
            <div  key={index} className="svg-item" onClick={props.onClick.bind(this, index)}>
                <Svg svgID={item.svgID} newColor={[randHairColor[index % numHairColors],randSkinColor[index % numSkinColors]]} title={item.svgDescription}/>
            </div>
        )
    })

    return (

        <div id="library">
            <div id="library-scroll">
                {svgList}
            </div>
        </div>
    )
}

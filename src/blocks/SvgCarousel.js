import React from "react"
import "../styles/SvgCarousel.scss";
import Svg from "./Svg";


export default function SvgCarousel(props) {
    let svgList=[];

    props.data.image.forEach((item,index)=>{
        svgList.push( 
            <div class="svg-item" onClick={props.onClick.bind(this, index)}>
                <Svg svgID={item.svgID} newColor={["#000000","#824836"]}/>
            </div>
        )
    })

    return (

        <div id="thumbnail">{svgList}</div>
    )
}

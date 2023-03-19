import React from "react"
import "../styles/SvgCarousel.scss";
import Svg from "./Svg";


export default function SvgCarousel(props) {
    let svgList = [];
    let randSkinColor = ["#3B2F2B", "#DFC9B3", "#703915", "#A57250"]
    let randHairColor = ["#000000", "#543821", "#4E0E24", "#D1D1D1", "#D6C44C", "#08125E"]

    props.data.image.forEach((item,index)=>{
        svgList.push( 
            <div class="svg-item" onClick={props.onClick.bind(this, index)}>
                <Svg svgID={item.svgID} newColor={[randHairColor[index%6],randSkinColor[index%4]]}/>
            </div>
        )
    })

    return (

        <div id="thumbnail">{svgList}</div>
    )
}

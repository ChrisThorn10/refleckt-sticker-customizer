import React from "react"
import "../styles/Svg.scss";
import SvgLoader from "./SvgLoader";


export default function Svg(props) {
      
    return (
        <React.Fragment>
            <SvgLoader id={props.svgID} newColor={props.newColor} title={props.title}/>
        </React.Fragment>
    )
}

// Set default props
Svg.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
import React from "react"
import "../styles/Svg.scss";
import SvgLibrary from "./SvgLibrary";


export default function Svg(props) {
      
    return (
        <React.Fragment>
            <SvgLibrary id={props.svgID} newColor={props.newColor} />
        </React.Fragment>
    )
}

// Set default props
Svg.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
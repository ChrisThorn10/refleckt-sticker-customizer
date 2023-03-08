import React from "react"
import "../styles/Svg.scss";
import SvgLibrary from "./SvgLibrary";

export default function Svg(props) {
    const hair = {
        fill: props.hairColor
      };

    const skin = {
        fill: props.skinColor
      };
      
    return (
        <React.Fragment>
            <SvgLibrary id={props.svgID}/>
        </React.Fragment>
    )
}

// Set default props
Svg.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
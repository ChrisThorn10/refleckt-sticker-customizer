import React from "react";
import Svg from "./Svg";
import {ReactComponent as Peace0001} from '../svgs/peace0001.svg';
import {ReactComponent as Peace0001b} from '../svgs/peace0001b.svg';

export default function SvgLibrary(props) {
    
    switch(props.id){
        case "peace0001": 
            return <Peace0001 />
            break;
        case "peace0001b": 
            return <Peace0001b />
            break;
    }
}

// Set default props
Svg.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
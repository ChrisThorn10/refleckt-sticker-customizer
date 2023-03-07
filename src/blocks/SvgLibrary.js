import React from "react";
import Svg from "./Svg";
import {ReactComponent as Peace0001} from '../svgs/peace0001.svg';
import {ReactComponent as Peace0002} from '../svgs/peace0002.svg';

export default function SvgLibrary(props) {
    
    switch(props.id){
        case "peace0001": 
            return <Peace0001 />
            break;
        case "peace0002": 
            return <Peace0002 />
            break;
    }
}

// Set default props
Svg.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
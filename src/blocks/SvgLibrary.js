import React from "react";
import Peace0001 from '../svgs/peace0001.js';
import {ReactComponent as Peace0001b} from '../svgs/peace0001b.svg';

export default function SvgLibrary(props) {
    switch(props.id){
        case "peace0001": 
            return <Peace0001 newColor={props.newColor}/>
        case "peace0001b": 
            return <Peace0001b newColor={props.newColor}/>
        default:
            return <Peace0001 newColor={props.newColor}/>
    }
}

// Set default props
SvgLibrary.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
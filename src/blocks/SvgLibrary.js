import React from "react";
import {ReactComponent as Peace0001} from '../svgs/peace0001.svg';
import {ReactComponent as Peace0001b} from '../svgs/peace0001b.svg';

export default function SvgLibrary(props) {
    
    switch(props.id){
        case "peace0001": 
            return <Peace0001 />
        case "peace0001b": 
            return <Peace0001b />
        default:
            return <Peace0001 />
    }
}

// Set default props
SvgLibrary.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };
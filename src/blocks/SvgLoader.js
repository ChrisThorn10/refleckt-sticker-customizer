import React from "react";
import Peace0001 from '../svgs/peace0001.js';
import Peace0001b from '../svgs/peace0001b.js';
import Peace0002 from '../svgs/peace0002.js';
import Peace0003 from '../svgs/peace0003.js';

export default function SvgLoader(props) {
    switch(props.id){
        case "peace0001": 
            return <Peace0001 newColor={props.newColor} title={props.title} />
        case "peace0001b": 
            return <Peace0001b newColor={props.newColor} title={props.title} />
        case "peace0002": 
            return <Peace0002 newColor={props.newColor} title={props.title} />
        case "peace0003": 
            return <Peace0003 newColor={props.newColor} title={props.title} />
        default:
            return <Peace0001 newColor={props.newColor} title={props.title} />
    }
}

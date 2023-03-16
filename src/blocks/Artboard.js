import React, { useState } from 'react';
import Svg from './Svg';
import ColorPickerList from './ColorPickerList';
import "../styles/Artboard.scss";
import data from "../data.json";
import DownloadButton from './DownloadButton';

const Artboard = () => {

    // read colors from json data file
    const colors = data.image[0].colors;

    // create variable to pass down to child element to control the swatch color
    const [newColor, setNewColor] = useState(
        colors.map((item, i) => {
            return item.hexCode
        }
        ))

    //update swatch color when a change event is detected
    const updateColor = (id, index) => { 
        const selectedColor = document.getElementById(id).value;

        const newColorArray = newColor.map((color,i) => {
            if (i === index) {
              // replace color with newly selected color
              return selectedColor;
            } else {
              // No change
              return color
            }
          });

        setNewColor(newColorArray);
    }

    return (
        <div>  
            <Svg svgID={data.image[0].svgID} newColor={newColor}/>
            <ColorPickerList newColor={newColor} onChange={updateColor} colors={colors}/>
            <DownloadButton />
        </div>
    )
}

export default Artboard;

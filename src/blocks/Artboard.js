import React, { useState } from 'react';
import Svg from './Svg';
import ColorPickerList from './ColorPickerList';
import "../styles/Artboard.scss";
import data from "../data.json";
import DownloadButton from './DownloadButton';
import SvgCarousel from './SvgCarousel';

const Artboard = () => {
    
    // index of active svg
    const [activeSvg, setActiveSvg] = useState(0)
    
    // read colors from json data file
    const colors = data.image[activeSvg].colors;

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

    // change the active svg depending on which icon is selected
    const selectSvg = (id) => {
        setActiveSvg(id);
    }

    return (
        <div>  
            <SvgCarousel data={data} onClick={selectSvg} />
            <div id="canvas">
                <Svg svgID={data.image[activeSvg].svgID} newColor={newColor}/>
                <ColorPickerList newColor={newColor} onChange={updateColor} colors={colors}/>
                <DownloadButton />
            </div>   
        </div>
    )
}

export default Artboard;

import React, { useState, useEffect } from 'react';
import Svg from './Svg';
import ColorPickerList from './ColorPickerList';
import "../styles/Artboard.scss";
import data from "../data.json";
import DownloadButton from './DownloadButton';
import SvgLibrary from './SvgLibrary';

const Artboard = () => {
    
    // index of active/selecte svg
    // automatically set to show first one
    const [activeSvg, setActiveSvg] = useState(0)
    
    // read colors from json data file
    const colors = data.images[activeSvg].colors;

    // create variable to pass down to child element to control the swatch color
    const [newColor, setNewColor] = useState(
        colors.map((item, i) => {
            return item.hexCode
        }
        ))

    // update swatch color when a change event is detected
    const updateColor = (id, index) => { 
        // retrieve selected color from color input element
        const selectedColor = document.getElementById(id).value;

        const newColorArray = newColor.map((color,i) => {
            if (i === index) {
              // replace color with newly selected color
              return selectedColor;
            } else {
              // no change
              return color
            }
          });

        setNewColor(newColorArray);
    }

    // change the active svg depending on which icon is selected
    const selectSvg = (index) => {
        let randHairColor = data.defaultColors.hair;
        let randSkinColor = data.defaultColors.skin;

        let numHairColors = data.defaultColors.hair.length;
        let numSkinColors = data.defaultColors.skin.length;

        setActiveSvg(index);
        setNewColor([randHairColor[index % numHairColors],randSkinColor[index % numSkinColors]]);
    }

    useEffect(() => {
        let svgHair = document.querySelectorAll("#canvas svg .hair");
        let svgSkin = document.querySelectorAll("#canvas svg .skin");

        addEvent(svgHair, "input_hair", "label_input_hair");
        addEvent(svgSkin, "input_skin", "label_input_skin");

        function addEvent(elem, desktopValue, mobileValue){
            elem.forEach((currentValue) => {
                currentValue.addEventListener('touchstart', (e) => handleDesktopInteraction(e,desktopValue))
                currentValue.addEventListener('click', (e) => handleMobileInteraction(e, mobileValue))
            })
        }

        function handleDesktopInteraction(e, desktop) {
            e.preventDefault()
            document.getElementById(desktop).click();
        }

        function handleMobileInteraction(e, mobile) {
            e.preventDefault()
            document.getElementById(mobile).click();
        }
    });

    return (
        <div id="mainContainer">  
            <SvgLibrary data={data} onClick={selectSvg} />
            <div id="canvas">
                <Svg svgID={data.images[activeSvg].svgID} newColor={newColor} title={data.images[activeSvg].svgDescription} />
                <ColorPickerList newColor={newColor} onChange={updateColor} colors={colors}/>
                <DownloadButton />
            </div>   
        </div>
    )
}

export default Artboard;

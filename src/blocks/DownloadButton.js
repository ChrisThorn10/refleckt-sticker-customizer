import React from 'react';
import "../styles/DownloadButton.scss";


const DownloadButton = (props) => {

    // Thanks to https://codepen.io/Alexander9111/pen/VwLaaPe?editors=1010

    function downloadSVGAsPNG(e){
        const canvas = document.createElement("canvas");
        const svg = document.querySelector('#canvas svg');
        const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
        const w = parseInt(svg.getAttribute('width'));
        const h = parseInt(svg.getAttribute('height'));
        const img_to_download = document.createElement('img');
        img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
        //console.log(w, h);
        img_to_download.onload = function () {
          //console.log('img loaded');
          canvas.setAttribute('width', w);
          canvas.setAttribute('height', h);
          const context = canvas.getContext("2d");
          //context.clearRect(0, 0, w, h);
          context.drawImage(img_to_download,0,0,w,h);
          const dataURL = canvas.toDataURL('image/png');
          if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(canvas.msToBlob(), "download.png");
            e.preventDefault();
          } else {
            const a = document.createElement('a');
            const my_evt = new MouseEvent('click');
            a.download = 'download.png';
            a.href = dataURL;
            a.dispatchEvent(my_evt);
          }
          //canvas.parentNode.removeChild(canvas);
        }  
      }


      function downloadSVGAsText() {
        const svg = document.querySelector('svg');
        const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
        const a = document.createElement('a');
        const e = new MouseEvent('click');
        a.download = 'download.svg';
        a.href = 'data:image/svg+xml;base64,' + base64doc;
        a.dispatchEvent(e);
      }

    return (
        <div>
        <button onClick={downloadSVGAsPNG} type="button">Download Custom Image</button>       
        </div>
    )
}

export default DownloadButton;


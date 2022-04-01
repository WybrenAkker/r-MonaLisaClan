// ==UserScript==
// @name         MonaLisaClan
// @namespace    http://tampermonkey.net/
// @version      0.40
// @description  Keep the canvas beautiful!
// @author       /u/djdogjuam2 & /u/irate_kalypso
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Walter-Hulsebos/r-MonaLisaClan/blob/main/alliance_overlay.user.js
// @downloadURL  https://github.com/Walter-Hulsebos/r-MonaLisaClan/raw/main/alliance_overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("overlay_img");
            i.src = "https://i.imgur.com/tiIMTXK.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            
            return i;
        })())

    }, false);
    
    let active = 1;

document.addEventListener("keypress", function(e) {
    if (e.which == 84) {
      const img = document.querySelector("overlay_img");
         if(active == 1) 
         {
            active = 2;
            img.style.opacity = 0.9;
        } else if (active == 2) 
        {
            active = 0;
            img.style.visibility = "hidden";
        } 
        else if (active == 0) 
        {
            active = 1;
            img.style.visibility = "inherit";
            img.style.opacity = 0.5;
        }
    }
  });
}



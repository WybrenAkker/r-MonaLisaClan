// ==UserScript==
// @name         MonaLisaClan
// @namespace    http://tampermonkey.net/
// @version      0.10
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
            const i = document.createElement("img");
            i.src = "https://i.imgur.com/tiIMTXK.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            
            return i;
        })())

    }, false);
    
    window.addEventListener("keypress", function(e) {
    if (e.which == 81) {
        console.log("hello you");
    }
  });
}



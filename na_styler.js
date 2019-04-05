"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

    Author: Todd Adcox Jr
   Date:   4-2-19 

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/



// Loads the setStyles function when the page loads.
window.onload = setStyles;

// The setStyles function that will randomly pick a style sheet when the page is loaded.
function setStyles() {
      var styleNum = randInt(5);

      var linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(linkElem);

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i <= 4; i++) {
            var sheetIMG = document.createElement("img");
            sheetIMG.setAttribute("src", "na_small_" + i + ".png");
            sheetIMG.setAttribute("alt", "na_style_" + i + ".css");

            sheetIMG.addEventListener("click", function (e) {
                  document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            });
            figBox.appendChild(sheetIMG);
      }
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  outline: pointer; \
                  opacity: 0.75; \
            }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1.0; \
            }", 2);

}

function randInt(size) {
      return Math.floor(size * Math.random());

}
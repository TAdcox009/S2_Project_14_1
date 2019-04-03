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

// 7. Christine wants users to be able to choose between the five fancy style sheet themes she has created by clicking thumbnail images from a figure box. Create an element node named figbox for the figure element. Set its id attribute to “styleThumbs” and append it to the div element with the ID “box”.

// The setStyles function that will randomly pick a style sheet when the page is loaded.
function setStyles() {
      var styleNum = randInt(5);
      var linkElem = document.createElement("link")
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(linkElem);
}



function randInt(size) {
      return Math.floor(size * Math.random());

}
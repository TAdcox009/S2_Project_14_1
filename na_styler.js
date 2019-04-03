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

      // 6. Create an element node for the link element and set its rel attribute to “stylesheet”, its id attri- bute to “fancySheet”, and its href attribute to “na_style_num.css” where num is the value of the styleNum variable. Append the fancySheet style element to the document head, adding it to the document’s style sheets collection.

      var linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(linkElem);

      // 7. Create an element node named figbox for the figure element. Set its id attribute to “styleThumbs” and append it to the div element with the ID “box”.
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);


      // 8. Next, populate the figure box with preview images of the five fancy style sheets. Insert a for loop with an index that goes from 0 up through 4 and each time through the loop do the following:

      // a. Create an img element node named sheetimg with a src attribute of “na_small_num.png” and an alt attribute value of “na_style_num.css” where num is the value of the index in the for loop.

      // b. Have the browser load a different style sheet when the user clicks one of the thumbnail images by adding an event handler to sheetImg that runs an anonymous function changing the href attribute of the link element with the ID “fancySheet” to the value of the alt attribute of the event target.

      // c. Append sheetImg to the figBox element node.
}


function randInt(size) {
      return Math.floor(size * Math.random());

}
/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Isabelle Samaniego
      Date:   Septermber 19, 2022

      Filename: project02-01.js
 */

function FarenheitToCelcius(degree){
      return (degree - 32) / 1.8;
};

function CelsiusToFarenheit(degree){
      return (degree*1.8) + 32;
};


// add event handlers
document.getElementById("cValue").onchange = function() {
      var cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFarenheit(cDegree);
};

document.getElementById("fValue").onchange = function() {
      var fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FarenheitToCelcius(fDegree);
};


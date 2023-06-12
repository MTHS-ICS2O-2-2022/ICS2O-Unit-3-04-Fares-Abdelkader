// Created by: Fares.Abdelkader
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

/**

 */
function enterClicked() {
  //input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  //process
  const celsius = ((fahrenheit - 32) * 5) / 9

  //output
  document.getElementById("fahrenheit-converted-to-celsius").innerHTML =
    "This is the temperature in celsius: " + celsius.toFixed(2) + "C°"
}
"use strict";

window.addEventListener("DOMContentLoaded", init);
//declare empty array
const dataArray = [];
//init function
//-----------------------------------------------
function init() {
  buildDataArray();
  document.querySelector("#bars").addEventListener("animationiteration", loop);
  //start the loop
  loop();
}

//loop the bars
//----------------------------------------------
function loop() {
  console.log("loop");
  scrollDataArray();
  displayDataArray();
}
//remove first bar at the beginning and add a new bar at the end
//-----------------------------------------------
function scrollDataArray() {
  dataArray.shift();
  dataArray.push(getNewData());
}
//get a random number bar
//-------------------------------------------------
function getNewData() {
  const value = Math.random() * 100;
  return value;
}
//fill the array with 40 values
//-------------------------------------------------
function buildDataArray() {
  for (let i = 0; i < 40; i++) {
    dataArray.push(getNewData());
  }
  console.log(dataArray);
}

function displayDataArray() {
  document.querySelectorAll(".bar").forEach(displayDataBar);
}
//display bars
//--------------------------------------------------
function displayDataBar(element, index) {
  element.style.height = dataArray[index] + "px";
  console.log(dataArray);
}

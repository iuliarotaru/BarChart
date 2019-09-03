"use strict";

window.addEventListener("DOMContentLoaded", init);
//ARRAY
const dataArray = [];

function init() {
  buildDataArray();
  document.querySelector("#bars").addEventListener("animationiteration", loop);
  //start the loop
  loop();
}

function loop() {
  console.log("loop");
  scrollDataArray();
  displayDataArray();
  //loop the loop;
  //setTimeOut(loop, 400);
}
function scrollDataArray() {
  //Remove first data at the beginning
  dataArray.shift();

  //add new data at the end;
  dataArray.push(getNewData());
}

function getNewData() {
  const value = Math.random() * 100;
  return value;
}

function buildDataArray() {
  //fill data array with 40 values
  for (let i = 0; i < 40; i++) {
    dataArray.push(getNewData());
  }
  console.log(dataArray);
}

function displayDataArray() {
  document.querySelectorAll(".bar").forEach(displayDataBar);
}

function displayDataBar(element, index) {
  element.style.height = dataArray[index] + "px";
  console.log(dataArray);
}

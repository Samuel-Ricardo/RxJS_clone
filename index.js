const canvas = document.getElementById("canvas");
const clearBtn = document.getElementById("clearBtn");
const ctx = canvas.getContext("2d");

const mouseEvents = {
  down: "mousedown",
  move: "mousemove",
  up: "mouseup",
  leave: "mouseleave",

  touchstart: "touchstart",
  touchmove: "touchmove",
  touchend: "touchend",

  click: "click",
};

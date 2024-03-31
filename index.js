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

const getMousePosition = (canvasDom, eventValue) => {
  const rect = canvasDom.getBoundingClientRect();
  return {
    x: eventValue.clientX - rect.left,
    y: eventValue.clientY - rect.top,
  };
};

const resetCanvas = (width, hieght) => {
  const parent = canvas.parentElement;

  canvas.width = width || parent.clientWidth * 0.9;
  canvas.height = hieght || parent.clientHeight * 1.5;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 4;
};

resetCanvas();

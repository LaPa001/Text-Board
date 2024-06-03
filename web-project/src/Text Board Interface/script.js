// text input
let textInput = document.getElementById("input-text");
let text = "";

// animation style
const animeSelect = document.getElementById("animation-style");
let selectedOption = "";

// canvas
const canvas = document.getElementById("scrolltext");
const c = canvas.getContext("2d");
c.fillStyle = "#ffffff";

// full canvas
const fullCanvas = document.getElementById("full-canvas");
const fullC = fullCanvas.getContext("2d");

// speed input
const speedInput = document.getElementById("speed");
let speed;

// size input
const sizeInput = document.getElementById("size");
let size = "";

textInput.addEventListener("input", (e) => {
  text = e.target.value;
});

speedInput.addEventListener("input", (e) => {
  speed = Number(e.target.value);
});

sizeInput.addEventListener("input", (e) => {
  size = e.target.value;
  c.font = `${size}px Jolly Lodger`;
});

const inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("start");
  fullCanvas.style.display = "block";
  
  fullCanvas.style.position = "fixed";
  fullCanvas.style.top = "0";
  fullCanvas.style.left = "0";
  fullCanvas.style.zIndex = "9999";
  fullCanvas.width = window.innerWidth;
  fullCanvas.height = window.innerHeight;
  
  fullC.fillStyle = "#ffffff";
  fullC.font = `${parseInt(size) * 2}px Jolly Lodger`;

  fullCanvas.style.background = "url('/photo/default-background.png')";
  fullCanvas.style.backgroundSize = "cover";
  fullC.fillText(text, 0, 100);
  console.log(text);
  console.log(size);
});

let xLeft = 0;
function leftToRight(text) {
  requestAnimationFrame(() => leftToRight(text));
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillText(text, xLeft, 100);

  xLeft += speed;

  if (xLeft > 450) {
    xLeft = -200;
  }
}

let xRight = canvas.width;
function rightToLeft(text) {
  requestAnimationFrame(() => rightToLeft(text));
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillText(text, xRight, 100);

  xRight -= speed;

  if (xRight < -200) {
    xRight = 400;
  }
}

animeSelect.addEventListener("change", (e) => {
  selectedOption = e.target.value;

  if (selectedOption === "left") {
    leftToRight(text);
  } else if (selectedOption === "right") {
    rightToLeft(text);
  }
});

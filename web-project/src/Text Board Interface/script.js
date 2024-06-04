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

animeSelect.addEventListener("change", (e) => {
  selectedOption = e.target.value;

  if (selectedOption === "left") {
    leftToRight(text);
  } else if (selectedOption === "right") {
    rightToLeft(text);
  }
});

const inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fullCanvas.style.display = "block";

  fullCanvas.style.position = "fixed";
  fullCanvas.style.top = "0";
  fullCanvas.style.left = "0";
  fullCanvas.style.zIndex = "9999";
  fullCanvas.width = window.innerWidth;
  fullCanvas.height = window.innerHeight;

  fullC.fillStyle = "#ffffff";
  fullC.font = `${parseInt(size) * 5}px Jolly Lodger`;

  fullCanvas.style.background = "url('/photo/default-background.png')";
  fullCanvas.style.backgroundSize = "cover";

  if (selectedOption === "left") {
    leftToRightFull(text);
  } else if (selectedOption === "right") {
    rightToLeftFull(text);
  }
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
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillText(text, xRight, 100);

  xRight -= speed;

  if (xRight < -200) {
    xRight = 400;
  }
}

let fullXLeft = 0;
function leftToRightFull(text) {
  requestAnimationFrame(() => leftToRightFull(text));
  fullC.clearRect(0, 0, fullCanvas.width, fullCanvas.height);

  fullC.fillText(text, fullXLeft, 600);

  fullXLeft += speed * 2;

  if (fullXLeft > 1900) {
    fullXLeft = -400;
  }
}

let fullXRight = fullCanvas.width;
function rightToLeftFull(text) {
  requestAnimationFrame(() => rightToLeftFull(text));
  fullC.clearRect(0, 0, fullCanvas.width, fullCanvas.height);

  fullC.fillText(text, fullXRight, 600);

  fullXRight -= speed * 2;

  if (fullXRight < -600) {
    fullXRight = 2000;
  }
}

// text input
let textInput = document.getElementById("input-text");
let text = "";

// animation style
const animeSelect = document.getElementById("animation-style");

// canvas
const canvas = document.getElementById("scrolltext");
const canvasDimension = canvas.getBoundingClientRect();
const c = canvas.getContext("2d");
c.fillStyle = "#ffffff";

// // full canvas
// const full_canvas = document.getElementById("full-scrolltext");
// const fullCanvasDimension = full_canvas.getBoundingClientRect();
// const full_c = full_canvas.getContext("2d");
// full_c.fillStyle = "#ffffff";
// full_c.font = "60px Jolly Lodger";

// full_c.fillText("Hello World", 0, 0);
// console.log("show something");

// speed input
const speedInput = document.getElementById("speed");
let speed;

// size input
const sizeInput = document.getElementById("size");
let size;

speedInput.addEventListener("input", (e) => {
  speed = Number(e.target.value);
  console.log(speed);
});

sizeInput.addEventListener("input", (e) => {
  size = e.target.value;
  c.font = `${size}px Jolly Lodger`;
  console.log(size);
});

let xLeft = 0;
function leftToRight(text) {
  requestAnimationFrame(() => leftToRight(text));
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillText(text, xLeft, 100);

  xLeft += speed;

  if (xLeft > 450) {
    xLeft = -200;
  }
}

let xRight = canvasDimension.width;
function rightToLeft(text) {
  requestAnimationFrame(() => rightToLeft(text));
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillText(text, xRight, 100);

  xRight -= speed;

  if (xRight < -200) {
    xRight = 400;
  }
}

textInput.addEventListener("input", (e) => {
  text = e.target.value;
});

animeSelect.addEventListener("change", (e) => {
  const selectedOption = e.target.value;

  if (selectedOption === "left") {
    leftToRight(text);
  } else if (selectedOption === "right") {
    rightToLeft(text);
  }
});

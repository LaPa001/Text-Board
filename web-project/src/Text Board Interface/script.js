// text input
let textInput = document.getElementById("input-text");
let text = "";

// animation style
const animeSelect = document.getElementById("animation-style");

// canvas
const canvas = document.getElementById("scrolltext");

const canvasDimension = canvas.getBoundingClientRect();

const c = canvas.getContext("2d");

c.font = "60px Jolly Lodger";
c.fillStyle = "#ffffff";

// speed input
const speedInput = document.getElementById("speed");
// size input
const sizeInput = document.getElementById("size");

let xLeft = 0;
function leftToRight(text) {
  requestAnimationFrame(() => leftToRight(text));
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillText(text, xLeft, 100);

  xLeft += 1;

  if (xLeft > 450) {
    xLeft = -200;
  }
}

let xRight = canvasDimension.width;
function rightToLeft(text) {
  requestAnimationFrame(() => rightToLeft(text));
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillText(text, xRight, 100);

  xRight -= 1;

  if (xRight < -200) {
    xRight = 400;
  }
}

textInput.addEventListener("input", (e) => {
  text = e.target.value;
});

speedInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

sizeInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

animeSelect.addEventListener("change", (e) => {
  const selectedOption = e.target.value;

  if (selectedOption === "left") {
    leftToRight(text);
  } else if (selectedOption === "right") {
    rightToLeft(text);
  }
});

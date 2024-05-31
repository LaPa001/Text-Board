// text input
let textInput = document.getElementById("input-text");
let text = "";

const animeSelect = document.getElementById("animation-style");

const canvas = document.getElementById("scrolltext");

const canvasDimension = canvas.getBoundingClientRect();

const c = canvas.getContext("2d");

c.font = "60px Jolly Lodger";
c.fillStyle = "#ffffff";

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
  leftToRight(text);
});

animeSelect.addEventListener("change", (e) => {
  const selectedOption = e.target.value;

  if (selectedOption === "left") {
    leftToRight(text);
  } else if (selectedOption === "right") {
    rightToLeft(text);
  }
});

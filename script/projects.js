// Code from Andrew Zamora at CodePen START
// https://codepen.io/andrewzamora/pen/BOqRJO

const img = document.getElementById("carousel");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

// Jag har lagt in mina egna projekt som bilder.
let pictures = [
  "./img/margaret.png",
  "./img/number_guessing.png",
  "./img/playing_card2.png",
  "./img/responsive_menu.jpg",
  "./img/chas_header.jpg",
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
  if (position >= pictures.length - 1) {
    position = 0;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position + 1];
  position++;
};

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position - 1];
  position--;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// Code from Andrew Zamora at CodePen END
// https://codepen.io/andrewzamora/pen/BOqRJO

function slideOne() {
  const imageOne = document.getElementById("imageOne");
  imageOne.className = "d-block";
}

function slideTwo() {
  const imageOne = document.getElementById("imageOne");
  const imageTwo = document.getElementById("imageTwo");
  imageTwo.className = "d-block";
  imageOne.className = "d-none";
}

function slideThree() {
  const imageOne = document.getElementById("imageOne");
  const imageTwo = document.getElementById("imageTwo");
  const imageThree = document.getElementById("imageThree");
  imageThree.className = "d-block";
  imageOne.className = "d-none";
  imageTwo.className = "d-none";
}
function slideFour() {
  const imageOne = document.getElementById("imageOne");
  const imageTwo = document.getElementById("imageTwo");
  const imageThree = document.getElementById("imageThree");
  const imageFour = document.getElementById("imageFour");
  imageOne.className = "d-none";
  imageTwo.className = "d-none";
  imageThree.className = "d-none";
  imageFour.className = "d-block";
}
function slideFive() {
  const imageOne = document.getElementById("imageOne");
  const imageTwo = document.getElementById("imageTwo");
  const imageThree = document.getElementById("imageThree");
  const imageFour = document.getElementById("imageFour");
  const imageFive = document.getElementById("imageFive");
  imageOne.className = "d-none";
  imageTwo.className = "d-none";
  imageThree.className = "d-none";
  imageFour.className = "d-none";
  imageFive.className = "d-block";
}

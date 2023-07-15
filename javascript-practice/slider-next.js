const slider = document.getElementById("sliderImage");
const prev = document.createElement("button");
prev.onclick = function onClick() {
  for (let i = 0; i < slider.children.length; i++) {
    slider.children[i].style.transform = "translateX(0%)";
  }
};
const next = document.createElement("button");
next.onclick = function onClickLast() {
  for (let x = 0; x < slider.children.length; x++) {
    slider.children[x].style.transform = "translateX(-100%)";
  }
};
prev.innerText = "Prev";
prev.className = "btn btn-dark rounded py-2 px-5 mt-3 mx-3";
next.innerText = "Next";
next.className = "btn btn-dark rounded py-2 px-5 mt-3 mx-3";
slider.after(prev, next);

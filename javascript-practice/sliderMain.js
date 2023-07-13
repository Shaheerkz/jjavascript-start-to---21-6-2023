const slide = document.getElementById("slider");
slide.className = "container mt-5";
for (let a = 0; a < slide.children.length; a++) {
  if (a >= 1) {
    let slides = slide.children[a];
    slides.style.display = "none";
  }
  const button = document.createElement("button");
  button.onclick = function showSlide() {
    for (let i = 0; i < slide.children.length; i++) {
      let add = slide.children[i];
      add.style.display = "none";
      let mainSlide = slide.children[a];
      mainSlide.style.display = "block";
    }
  };
  button.innerText = slide.children.length - a;
  button.className = "btn btn-info rounded-circle mx-2 mt-2";
  slide.after(button);
}

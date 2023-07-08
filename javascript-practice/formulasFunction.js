function onCalculate() {
  let totalMarks = document.getElementById("totalMarks");
  let obtainedMarks = document.getElementById("obtainedMarks");
  let mainHeading = document.getElementById("mainHeading");

  totalMarks = Number(totalMarks.value);
  obtainedMarks = Number(obtainedMarks.value);
  let percentage = (obtainedMarks / totalMarks) * 100;
  mainHeading.innerText = "The Result is: " + percentage + "%";
}

function onConcatinate() {
  let writeName = document.getElementById("writeName");
  let writeFatherName = document.getElementById("writeFatherName");
  const lastHeading = document.getElementById("lastHeading");
  let add = writeName.value + " " + writeFatherName.value;
  lastHeading.innerText = "Your Name is: " + add;
}

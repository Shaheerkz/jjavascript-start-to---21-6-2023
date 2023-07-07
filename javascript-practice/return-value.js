const bDiv = document.getElementById("buttonSide");
bDiv.className = "container d-flex justify-content-evenly py-5";

function totalSubject(urdu, maths, eng, physics, chemistry) {
  return urdu + maths + eng + physics + chemistry;
}

let totalMarks = totalSubject(50, 60, 40, 80, 85, 60);

function getPercentage(marks) {
  return (marks / 500) * 100;
}

let percentageResult = getPercentage(totalMarks);

function obtainMarks() {
  alert("Total Marks " + ": " + 500);
  console.log("Total Marks " + ": " + 500);
  alert("Obtained Marks" + ": " + totalMarks);
  console.log("Obtained Marks" + ": " + totalMarks);
  alert("Total Percentage " + ": " + percentageResult + "%");
  console.log("Total Percentage " + ": " + percentageResult + "%");
}

function oxygen(h, o) {
  return h * 2 * o;
}
let oxygenValue = oxygen(1, 16);
function toclick() {
  alert("Oxygen Value is " + ": " + oxygenValue);
  console.log("Oxygen Value is " + ": " + oxygenValue);
}

function gulucose(c, h, o) {
  return c * h * o;
}

let gulucoseValue = gulucose(6, 12, 16);

function hereClick() {
  alert("Gulucose Value is " + ": " + gulucoseValue);
  console.log("Gulucose Value is " + ": " + gulucoseValue);
}

function pythagorus(a, b, c) {
  return a ** 2 + b ** 2 == c ** 2;
}

let pythagorusResult = pythagorus(16, 32, 300);

console.log(pythagorusResult);

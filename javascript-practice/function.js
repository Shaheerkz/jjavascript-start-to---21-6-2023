const div = document.getElementById("header");
const h1 = document.createElement("h1");
div.className = "container";
div.className = "text-center py-5";
h1.innerText = "JavaScript Basic Functions";
h1.style.color = "#fff";
div.append(h1);

// Addition
function sum(a, b) {
  console.log("Addition" + ": ", a + b);
}
sum(5, 10);

// Substraction
function subs(a, b) {
  console.log("Substraction" + ": ", a - b);
}
subs(15, 10);

// Multiplication
function ml(a, b) {
  console.log("A multiply by b" + " = ", a * b);
}
ml(15, 2);

// Division
function dv(a, b) {
  console.log("A divided by b" + " = ", a / b);
}
dv(2, 15);

// Greater then
function grt(a, b) {
  console.log("A is Greater then B" + ": ", a > b);
}
grt(25, 10);
grt(25, 30);

// less then
function les(a, b) {
  console.log("A is Less then B" + ": ", a < b);
}
les(25, 10);
les(5, 10);

// Equals to
function eq(a, b) {
  console.log("A is Greater then B or Equal" + ": ", a == b);
}
eq(40, 40);

// Equals value or equals type
function value(a, b, c, d) {
  console.log("A is equals to B or Equals to type" + ": ", a === b, c === d);
}
value(40, "40", 40, "40");

function helloWorld(message) {
  console.log("Hello World", message);
}
helloWorld("This is new message");

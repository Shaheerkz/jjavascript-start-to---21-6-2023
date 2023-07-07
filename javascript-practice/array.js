document.write("<h1>" + "Nested Arrays Practice" + "</h1>");

let school = [
  "Eagle House",
  "Iqra school",
  "Anees Hassan",
  ["Government School", ["Primary School"]],
];
let years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];
let variousTypes = ["England", 1, null, [undefined, true, ["Pakistan"]]];
const jobApplicants = [
  {
    fname: "Qasim",
    lname: "Ahmed",
    age: 28,
    areYouMale: true,
    qualification: "Graduate",
    jobExperience: "2 Years experience",
  },
  {
    fname: "Zia",
    lname: "Khalid",
    age: 21,
    areYouMale: true,
    qualification: "Post Graduate",
    jobExperience: "2 years experience",
  },
  {
    fname: "Usama",
    lname: "Ahmed",
    age: 22,
    areYouMale: true,
    qualification: "BSC",
    jobExperience: "2 Years experience",
  },
  {
    fname: "Asim",
    lname: "Naeem",
    age: 21,
    areYouMale: true,
    qualification: "BS",
    jobExperience: "2 Years experience",
  },
  {
    fname: "Shahmeer",
    lname: "Hussain",
    age: 32,
    areYouMale: true,
    qualification: "Graduate",
    jobExperience: "8 Years experience",
  },
  {
    fname: "Zeeshan",
    lname: "Asif",
    age: 19,
    areYouMale: true,
    qualification: "BA",
    jobExperience: null,
  },
  {
    fname: "Zubair",
    lname: "Aslam",
    age: 24,
    areYouMale: true,
    qualification: "B.COM",
    jobExperience: null,
  },
  {
    fname: "Hassan",
    lname: "Tariq",
    age: 26,
    areYouMale: true,
    qualification: "Graduate",
    jobExperience: null,
  },
  {
    fname: "Muhammad",
    lname: "Shaheer",
    age: 22,
    areYouMale: true,
    qualification: "Intermidiate",
    jobExperience: "3 years experience",
  },
  {
    fname: "Hassan",
    lname: "Riaz",
    age: 21,
    areYouMale: true,
    qualification: "BSC",
    jobExperience: null,
  },
];

const sallrySheet = [
  {
    name: "Anwar",
    designation: "Manager",
    amount: 50000,
  },
  {
    name: "Javed",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Ahmed",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Majeed",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Asim",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Murad",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Fareed",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Ali",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Junaid",
    designation: "Worker",
    amount: 25000,
  },
  {
    name: "Anas",
    designation: "Worker",
    amount: 25000,
  },
];
console.log(years);
console.log(school[3][1]);
console.log(variousTypes[3][2]);
console.table(jobApplicants);
console.table(sallrySheet);

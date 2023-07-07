let a = "Job Applicants Data";
let b = document.getElementById("h1");
h1.innerText = a;

// applicants data table

const jobApplicants = [
  {
    fname: "First Name",
    lname: "Last Name",
    age: "Age",
    areYouMale: "Is Male",
    qualification: "Qualification",
    jobExperience: "Job Experience",
  },
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
for (let a = 0; a < jobApplicants.length; a++) {
  const table = document.getElementById("job-applicants");
  const thead = document.createElement("thead");
  table.append(thead);
  const tr = document.createElement("tr");
  thead.append(tr);
  for (const m in jobApplicants[a]) {
    const td = document.createElement("td");
    td.innerText = jobApplicants[a][m];
    tr.append(td);
  }
}
let c = "Employees Salary Data";
let d = document.getElementById("heading");
heading.innerText = c;

// Salary Sheet

let salarySheet = [
  {
    name: "Name",
    designation: "Designation",
    amount: "Amount",
  },
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
for (let a = 0; a < salarySheet.length; a++) {
  const table = document.getElementById("salary-data");
  const tr = document.createElement("tr");
  table.append(tr);
  for (const d in salarySheet[a]) {
    const td = document.createElement("td");
    tr.append(td);
    td.innerText = salarySheet[a][d];
  }
}

let e = "Calender 2023";
let f = document.getElementById("headingT");
headingT.innerText = e;

// Calender

let claender = [
  {
    one: "January",
    two: "Fabruary",
    three: "March",
    four: "April",
    five: "May",
    six: "June",
    seven: "July",
    eight: "August",
    nine: "September",
    ten: "October",
    eleven: "November",
    twelve: "December",
  },
  {
    one: 1,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1,
    nine: 1,
    ten: 1,
    eleven: 1,
    twelve: 1,
  },
  {
    one: 2,
    two: 2,
    three: 2,
    four: 2,
    five: 2,
    six: 2,
    seven: 2,
    eight: 2,
    nine: 2,
    ten: 2,
    eleven: 2,
    twelve: 2,
  },
  {
    one: 3,
    two: 3,
    three: 3,
    four: 3,
    five: 3,
    six: 3,
    seven: 3,
    eight: 3,
    nine: 3,
    ten: 3,
    eleven: 3,
    twelve: 3,
  },
  {
    one: 4,
    two: 4,
    three: 4,
    four: 4,
    five: 4,
    six: 4,
    seven: 4,
    eight: 4,
    nine: 4,
    ten: 4,
    eleven: 4,
    twelve: 4,
  },
  {
    one: 5,
    two: 5,
    three: 5,
    four: 5,
    five: 5,
    six: 5,
    seven: 5,
    eight: 5,
    nine: 5,
    ten: 5,
    eleven: 5,
    twelve: 5,
  },
  {
    one: 6,
    two: 6,
    three: 6,
    four: 6,
    five: 6,
    six: 6,
    seven: 6,
    eight: 6,
    nine: 6,
    ten: 6,
    eleven: 6,
    twelve: 6,
  },
  {
    one: 7,
    two: 7,
    three: 7,
    four: 7,
    five: 7,
    six: 7,
    seven: 7,
    eight: 7,
    nine: 7,
    ten: 7,
    eleven: 7,
    twelve: 7,
  },
  {
    one: 8,
    two: 8,
    three: 8,
    four: 8,
    five: 8,
    six: 8,
    seven: 8,
    eight: 8,
    nine: 8,
    ten: 8,
    eleven: 8,
    twelve: 8,
  },
  {
    one: 9,
    two: 9,
    three: 9,
    four: 9,
    five: 9,
    six: 9,
    seven: 9,
    eight: 9,
    nine: 9,
    ten: 9,
    eleven: 9,
    twelve: 9,
  },
  {
    one: 10,
    two: 10,
    three: 10,
    four: 10,
    five: 10,
    six: 10,
    seven: 10,
    eight: 10,
    nine: 10,
    ten: 10,
    eleven: 10,
    twelve: 10,
  },
  {
    one: 11,
    two: 11,
    three: 11,
    four: 11,
    five: 11,
    six: 11,
    seven: 11,
    eight: 11,
    nine: 11,
    ten: 11,
    eleven: 11,
    twelve: 11,
  },
  {
    one: 12,
    two: 12,
    three: 12,
    four: 12,
    five: 12,
    six: 12,
    seven: 12,
    eight: 12,
    nine: 12,
    ten: 12,
    eleven: 12,
    twelve: 12,
  },
  {
    one: 13,
    two: 13,
    three: 13,
    four: 13,
    five: 13,
    six: 13,
    seven: 13,
    eight: 13,
    nine: 13,
    ten: 13,
    eleven: 13,
    twelve: 13,
  },
  {
    one: 14,
    two: 14,
    three: 14,
    four: 14,
    five: 14,
    six: 14,
    seven: 14,
    eight: 14,
    nine: 14,
    ten: 14,
    eleven: 14,
    twelve: 14,
  },
  {
    one: 15,
    two: 15,
    three: 15,
    four: 15,
    five: 15,
    six: 15,
    seven: 15,
    eight: 15,
    nine: 15,
    ten: 15,
    eleven: 15,
    twelve: 15,
  },
  {
    one: 16,
    two: 16,
    three: 16,
    four: 16,
    five: 16,
    six: 16,
    seven: 16,
    eight: 16,
    nine: 16,
    ten: 16,
    eleven: 16,
    twelve: 16,
  },
  {
    one: 17,
    two: 17,
    three: 17,
    four: 17,
    five: 17,
    six: 17,
    seven: 17,
    eight: 17,
    nine: 17,
    ten: 17,
    eleven: 17,
    twelve: 17,
  },
  {
    one: 18,
    two: 18,
    three: 18,
    four: 18,
    five: 18,
    six: 18,
    seven: 18,
    eight: 18,
    nine: 18,
    ten: 18,
    eleven: 18,
    twelve: 18,
  },
  {
    one: 19,
    two: 19,
    three: 19,
    four: 19,
    five: 19,
    six: 19,
    seven: 19,
    eight: 19,
    nine: 19,
    ten: 19,
    eleven: 19,
    twelve: 19,
  },
  {
    one: 20,
    two: 20,
    three: 20,
    four: 20,
    five: 20,
    six: 20,
    seven: 20,
    eight: 20,
    nine: 20,
    ten: 20,
    eleven: 20,
    twelve: 20,
  },
  {
    one: 21,
    two: 21,
    three: 21,
    four: 21,
    five: 21,
    six: 21,
    seven: 21,
    eight: 21,
    nine: 21,
    ten: 21,
    eleven: 21,
    twelve: 21,
  },
  {
    one: 22,
    two: 22,
    three: 22,
    four: 22,
    five: 22,
    six: 22,
    seven: 22,
    eight: 22,
    nine: 22,
    ten: 22,
    eleven: 22,
    twelve: 22,
  },
  {
    one: 23,
    two: 23,
    three: 23,
    four: 23,
    five: 23,
    six: 23,
    seven: 23,
    eight: 23,
    nine: 23,
    ten: 23,
    eleven: 23,
    twelve: 23,
  },
  {
    one: 24,
    two: 24,
    three: 24,
    four: 24,
    five: 24,
    six: 24,
    seven: 24,
    eight: 24,
    nine: 24,
    ten: 24,
    eleven: 24,
    twelve: 24,
  },
  {
    one: 25,
    two: 25,
    three: 25,
    four: 25,
    five: 25,
    six: 25,
    seven: 25,
    eight: 25,
    nine: 25,
    ten: 25,
    eleven: 25,
    twelve: 25,
  },
  {
    one: 26,
    two: 26,
    three: 26,
    four: 26,
    five: 26,
    six: 26,
    seven: 26,
    eight: 26,
    nine: 26,
    ten: 26,
    eleven: 26,
    twelve: 26,
  },
  {
    one: 27,
    two: 27,
    three: 27,
    four: 27,
    five: 27,
    six: 27,
    seven: 27,
    eight: 27,
    nine: 27,
    ten: 27,
    eleven: 27,
    twelve: 27,
  },
  {
    one: 28,
    two: 28,
    three: 28,
    four: 28,
    five: 28,
    six: 28,
    seven: 28,
    eight: 28,
    nine: 28,
    ten: 28,
    eleven: 28,
    twelve: 28,
  },
  {
    one: 29,
    two: 29,
    three: 29,
    four: 29,
    five: 29,
    six: 29,
    seven: 29,
    eight: 29,
    nine: 29,
    ten: 29,
    eleven: 29,
    twelve: 29,
  },
  {
    one: 30,
    two: 30,
    three: 30,
    four: 30,
    five: 30,
    six: 30,
    seven: 30,
    eight: 30,
    nine: 30,
    ten: 30,
    eleven: 30,
    twelve: 30,
  },
];
for (let a = 0; a < claender.length; a++) {
  const table = document.getElementById("calender");
  const tr = document.createElement("tr");
  table.append(tr);
  for (const b in claender[a]) {
    const td = document.createElement("td");
    td.innerText = claender[a][b];
    tr.append(td);
  }
}

let s = "Students Data";
let t = document.getElementById("headingl");
headingl.innerText = s;

// Students
let students = [
  {
    fname: "shaheer",
    lname: "Khanzada",
    age: 22,
    email: "shariikhan925@gmail.com",
  },
  {
    fname: "Zia",
    lname: "Khanzada",
    age: 21,
    email: "Ziakhan925@gmail.com",
  },
  {
    fname: "Mujtaba",
    lname: "Khanzada",
    age: 20,
    email: "Mujhtaba@gmail.com",
  },
  {
    fname: "Burhan",
    lname: "Khanzada",
    age: 20,
    email: "burhan.kz@gmail.com",
  },
];

const table = document.getElementById("student-data");
table.className = "table";
for (let i = 0; i < students.length; i++) {
  if (i === 0) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.className = "table-dark";

    for (let key in students[i]) {
      const th = document.createElement("th");
      th.innerText = key.toUpperCase();
      tr.append(th);
    }

    thead.append(tr);
    table.append(thead);
  }
}

const tbody = document.createElement("tbody");
table.append(tbody);

for (let i = 0; i < students.length; i++) {
  const tr = document.createElement("tr");
  for (let key in students[i]) {
    const td = document.createElement("td");
    td.innerText = students[i][key];
    tr.append(td);
  }
  tbody.append(tr);
}

const productOrder = [
  {
    productName: "Foldable Mini Drome",
    productNo: 85631,
    payment: "Due",
    status: "Pending",
  },
  {
    productName: "Foldable Mini Drome",
    productNo: 85631,
    payment: "Due",
    status: "Pending",
  },
  {
    productName: "Foldable Mini Drome",
    productNo: 85631,
    payment: "Due",
    status: "Pending",
  },
  {
    productName: "Foldable Mini Drome",
    productNo: 85631,
    payment: "Due",
    status: "Pending",
  },
  {
    productName: "Foldable Mini Drome",
    productNo: 85631,
    payment: "Due",
    status: "Pending",
  },
];

const div = document.getElementById("product-order");
div.className = "container";
const h1 = document.createElement("h1");
h1.innerText = "Products Order";
h1.className = "text-center";
div.append(h1);
const table = document.createElement("table");
div.append(table);
table.className = "table";

for (let f = 0; f < productOrder.length; f++) {
  if (f == 0) {
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    const tr = document.createElement("tr");
    for (const m in productOrder[f]) {
      const th = document.createElement("th");
      th.innerText = m;
      tr.append(th);
    }
    table.append(thead);
    thead.append(tr);
  }
  const tbody = document.createElement("tbody");
  table.append(tbody);
  const tr = document.createElement("tr");
  for (const m in productOrder[f]) {
    const td = document.createElement("td");
    tbody.append(tr);
    tr.append(td);
    td.innerText = productOrder[f][m];
  }
}

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

const divTwo = document.getElementById("job-applicants");
divTwo.className = "container-fluid";
const h2 = document.createElement("h2");
h2.innerText = "Sallry Sheet";
h2.className = "text-center text-success";
divTwo.append(h2);
const tbl = document.createElement("table");
tbl.className = "d-flex flex-column justify-content-center";
divTwo.append(tbl);

for (let k = 0; k < sallrySheet.length; k++) {
  if (k == 0) {
    const thd = document.createElement("thead");
    const tr = document.createElement("tr");
    for (const s in sallrySheet[k]) {
      const tbh = document.createElement("th");
      tbh.innerText = s;
      tr.append(tbh);
    }
    tbl.append(thd);
    thd.append(tr);
  }
  const tb = document.createElement("tbody");
  tbl.append(tb);
  const tr = document.createElement("tr");
  for (const l in sallrySheet[k]) {
    const td = document.createElement("td");
    tb.append(tr);
    tr.append(td);
    tr.innerText = sallrySheet[k][l];
  }
}

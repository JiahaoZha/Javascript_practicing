let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];


const buyBtn = document.getElementById("purchase-btn");
const inputPrice = document.getElementById("cash")
const changeDue = document.getElementById("change-due")

buyBtn.addEventListener("click",()=>{
  if(inputPrice.value < price){
    alert("Customer does not have enough money to purchase the item");
  }else if(inputPrice.value == price){
    changeDue.innerText = "No change due - customer paid with exact cash";
  }else {
    changeBill(inputPrice.value);
  };
})

const denominations = [
    { name: "ONE HUNDRED", value: 100 },
    { name: "TWENTY", value: 20 },
    { name: "TEN", value: 10 },
    { name: "FIVE", value: 5 },
    { name: "ONE", value: 1 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 },
  ];

  
function changeBill(pay) {
  let changeback = (pay - price).toFixed(2); // 保留两位小数
  let totalback = [];
  let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2); // 计算收银机总金额并保留两位小数

  // 如果收银机中的现金正好等于需要找的零钱
  if (totalCID === changeback) {
    let formattedChange = cid
      .filter(([_, value]) => value > 0) // 只显示有现金的货币
      .map(([name, value]) => `${name}: $${value.toFixed(2)}`)
      .join(" ");
    changeDue.innerText = `Status: CLOSED ${formattedChange}`;
    return;
  }

  // 如果收银机中的现金不足以找零
  if (Number(totalCID) < Number(changeback)) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  // 正常找零逻辑
  for (let i = 0; i < denominations.length; i++) {
    let { name, value } = denominations[i];
    let availableCash = cid.find(item => item[0] === name)[1];
    while (changeback >= value && availableCash >= value) {
      changeback = (changeback - value).toFixed(2);
      totalback.push(name);
      availableCash -= value;
    }
  }

  // 如果找零后仍有剩余金额
  if (changeback > 0) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
  } else {
    changeDue.innerText = formatChange(totalback);
  }
}

function formatChange(changeArray) {
  let summary = changeArray.reduce((acc, curr) => {
    let value = denominations.find(d => d.name === curr).value;
    acc[curr] = (acc[curr] || 0) + value;
    return acc;
  }, {});

  let formattedChange = Object.entries(summary)
    .map(([key, value]) => `${key}: $${value.toFixed(2)}`)
    .join(" ");

  return `Status: OPEN ${formattedChange}`;
}

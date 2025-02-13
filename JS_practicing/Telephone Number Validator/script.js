const numbers = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const results = document.getElementById('results-div'); 
const regex1 = /^(?!1-)(1?)([\d]{10})/
const regex2 = /(1?)((\d){3}-)((\d){3}-)(\d){4}/
const regex3 = /(1?)\(\d{3}\)((\d){3}-)(\d){4}/
const regex4 = /^1?\s?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/




function checkinput (num){
  num = numbers.value

  if(num===""){
    alert("Please provide a phone number")
  }
  else
  {
    if(lengthCheck(num)===10||lengthCheck(num)===11){
      if(formatCheck(num)){
         results.innerHTML += `<p class="result-num">Valid US number: ${num}</p>`}else{
       results.innerHTML += `<p class="result-num">Invalid US number: ${num}</p>`
     }
  }else{results.innerHTML += `<p class="result-num">Invalid US number: ${num}</p>`}
}
}

function cleanning(){
  results.innerHTML = ``;
}

function getnum(num){
  num = num.split('-').join("")
  num = num.split(' ').join("")
  num = num.split('(').join("")
  num = num.split(')').join("")
  return num
}

function lengthCheck(num){
  const numlength = getnum(num).length
  return numlength
}

const formatCheck =(num)=>{
  //if(regex1.test(num)||regex2.test(num)||regex3.test(num)){return true}//
  if(regex4.test(num)){return true}
  else{return false}
}


check.addEventListener("click",checkinput)
clear.addEventListener("click",cleanning)
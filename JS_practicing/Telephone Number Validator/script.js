const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div'); 

const regex4 = /^1?\s?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/




function checkinput (num){
  num = userInput.value

  if(num===""){
    alert("Please provide a phone number")
  }
  else
  {
    if(lengthCheck(num)===10||lengthCheck(num)===11){
      if(formatCheck(num)){
         resultsDiv.innerHTML += `<p class="result-num">Valid US number: ${num}</p>`}else{
       resultsDiv.innerHTML += `<p class="result-num">Invalid US number: ${num}</p>`
     }
  }else{resultsDiv.innerHTML += `<p class="result-num">Invalid US number: ${num}</p>`}
}
}

function cleanning(){
  resultsDiv.innerHTML = ``;
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
  if(regex4.test(num)){return true}
  else{return false}
}


checkBtn.addEventListener("click",checkinput)
clear.addEventListener("click",cleanning)
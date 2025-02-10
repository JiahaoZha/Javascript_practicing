const userInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function nullinput (userInput){
  if (userInput.value==''){
    alert("Please input a value");
  }
  return;
}

button.addEventListener('click',()=>{
  nullinput(userInput)
});


function checker (str){
  str = userInput.value;
  if(str){
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr){
      showresult1();
    }else{
      showresult2();
    }
    }
  }

function showresult1 (){
  let str = userInput.value;
  str = str + " is a palindrome";
  result.innerText = str;
}

function showresult2(){
  let str = userInput.value;
  str = str + " is not a palindrome";
  result.innerText = str;
}

button.addEventListener('click',checker);
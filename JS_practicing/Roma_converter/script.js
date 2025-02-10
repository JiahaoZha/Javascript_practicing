const input = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');


function invalidInput(int){
  if(int === ""){
    output.innerText = "Please enter a valid number"
  }
  else if(int <= 0){
    output.innerText ="Please enter a number greater than or equal to 1";
  }else if(int >= 4000){
    output.innerText ="Please enter a number less than or equal to 3999";
  }else{
    let result = convert_to_roma(input.value)
    output.innerText = result;
  }
}


btn.addEventListener("click",()=>{
  invalidInput(input.value);
});


function convert_to_roma (int){
  let roma = "";
  
  while(int-1000 >=0){
    roma += "M"
    int -= 1000;
  }
  while(int-900 >=0){
    roma += "CM"
    int -= 900;
  }
  while(int-500 >=0){
    roma += "D"
    int -= 500;
  }
  while(int-400 >=0){
    roma += "CD"
    int -= 400;
  }
  while(int-100 >=0){
    roma += "C"
    int -= 100;
  }
  while(int-90 >=0){
    roma += "XC"
    int -= 90;
  } 
  while(int-50 >=0){
    roma += "L"
    int -= 50;
  }
  while(int-40 >=0){
    roma += "XL"
    int -= 40;
  }
  while(int-10 >=0){
    roma += "X"
    int -= 10;
  }
  while(int-9 >=0){
    roma += "IX"
    int -= 9;
  }
  while(int-5 >=0){
    roma += "V"
    int -= 5;
  }
  while(int-4 >=0){
    roma += "IV"
    int -= 4;
  }
  while(int-1 >=0){
    roma += "I";
    int -= 1;
  }
  return roma
}

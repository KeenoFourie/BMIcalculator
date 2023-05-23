// Naming everything

let heightInput = document.querySelector(".centimeters");
let weightInput = document.querySelector(".kilograms");
let calculate = document.querySelector(".btn_calculate");
let result = document.querySelector(".input_bmi");
let answer = document.querySelector(".input_answer");

calculate.addEventListener("click", ()=>{
    
    let height = heightInput.value;
    let weight = weightInput.value;
    let BMI = (weight/((height*height)/10000)).toFixed(2);    //equation fo bmi
    result.innerText = BMI;


// Conditions
    if(BMI < 18.5){
        answer.innerText = "You are Underweight"; result.style.color = "orange"; answer.style.color = "orange"; 
    }
    
    else if(BMI > 18.5 && BMI <= 24.9){
        answer.innerText = "You are Healthy" ; result.style.color = "green"; answer.style.color = "green";
    }
    
    else if(BMI >= 25 && BMI <= 29.9 ){
        answer.innerText = "You are Overweight"; result.style.color = "orange"; answer.style.color = "orange";
    }
    
    else{
        answer.innerText = "You are Obese"; result.style.color = "red"; answer.style.color = "red";
    }
});


// Clear every variable/value
document.querySelector(".btn").
addEventListener("click", ()=>{
    let remove = heightInput.value; weightInput;
    result.innerHTML = "";
    answer.innerHTML = "";
    heightInput.value = ""; 
    weightInput.value = "";
});
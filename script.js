function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let firstNum=null;
let secondNum=null;
let operator=null;



function operate(a,b,operator){
    if(operator==="+"){
        display.textContent=add(a,b);
    }
    else if (operator==="-"){
        display.textContent=subtract(a,b);
    }
    else if(operator==="*"){
        display.textContent=multiply(a,b);
    }
    else if (operator==="/"){
        display.textContent=divide(a,b);
    }
}




const arrayOfOperators = ["+","-","*","/"];
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number").forEach((index)=>{
    index.addEventListener("click",()=>{
        populateDisplay(index.textContent);
    })
});
const operators = document.querySelectorAll(".operators").forEach((index)=>{
    index.addEventListener("click",populateDisplay(index.textContent));
})




function populateDisplay(a){
    if(a in arrayOfOperators&&firstNum!==null){
        operator=a;
        
    }
    if (firstNum===null&&operator===null){
        firstNum=a;
        display.textContent=firstNum;
    }
    else if(operator===null&&firstNum!==null){
        firstNum=firstNum+a;
        display.textContent=firstNum;
    }
    else if(operator!==null&&firstNum!==null&&secondNum===null){
        secondNum=a;
        display.textContent=secondNum;
    }
    else if(operator!==null&&firstNum!==null&&secondNum!==null){
        secondNum=secondNum+a;
        display.textContent=secondNum;
    }
    else if (a==="="&&operator!==null&&firstNum!==null&&secondNum!=null){
        operate(firstNum,secondNum,operator);
    }
}

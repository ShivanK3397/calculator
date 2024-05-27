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
        return add(a,b);
    }
    else if (operator==="-"){
        display.textContent=subtract(a,b);
        return subtract(a,b);
    }
    else if(operator==="*"){
        display.textContent=multiply(a,b);
        return multiply(a,b);
    }
    else if (operator==="/"){
        display.textContent=divide(a,b);
        
        return divide(a,b);
    }
}




const arrayOfOperators = ["+","-","*","/"];
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number").forEach((index)=>{
    index.addEventListener("click",()=>{
        populateDisplay(index.textContent);
    })
});
const operators = document.querySelectorAll(".operator").forEach((index)=>{
    index.addEventListener("click",()=>{
        populateDisplay(index.textContent);
    });
})


const clear = document.querySelector("#AC");
clear.addEventListener("click",()=>{
    display.textContent=0;
    firstNum=null;
    secondNum=null;
    operator=null;
    
});



function populateDisplay(a){
    if (a==="="&&operator!==null&&firstNum!==null&&secondNum!=null){
        firstNum=operate(+firstNum,+secondNum,operator);
        console.log(firstNum);
        if(firstNum===Infinity){
            display.textContent="Error"
            firstNum = null;
        }
        secondNum=null;
        operator=null;
        
    }
    else if (a==="del"&&firstNum!==null&&secondNum===null){
        if (display.textContent[0]==="-"&&display.textContent.length===2){
            display.textContent=0;
            firstNum=0;
        }
        else{
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        firstNum=display.textContent;
        }
        
    }
    else if (a==="del"&&operator!==null&&firstNum!==null&&secondNum!==null){
        if (display.textContent[0]==="-"&&display.textContent.length===2){
            display.textContent=0;
            secondNum=0;
        }
        else{
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        secondNum=display.textContent;
        }
        

    }
    else if (arrayOfOperators.includes(a)&&operator!==null&&firstNum!==null&&secondNum!=null){
        firstNum=operate(+firstNum,+secondNum,operator);
        console.log(firstNum);
        if(firstNum===Infinity){
            display.textContent="Error";
            firstNum=null;
        }
        secondNum=null;
        operator=a;
    }
    else if  (a==="="){

    }
    
    else if(arrayOfOperators.includes(a)&&firstNum!==null){
        operator=a;
        
        
    }
    else if (firstNum===null&&operator===null&&!arrayOfOperators.includes(a)){
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
    
}



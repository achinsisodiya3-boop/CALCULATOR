const buttons = document.querySelectorAll('button');
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
let clear= document.getElementById("clear");
let add= document.getElementById("add");
let subtract= document.getElementById("subtract");
let divide= document.getElementById("divide");
let multiply= document.getElementById("multiply");
let dot =document.getElementById("dot");
let equals =document.getElementById("equals");








btn1.addEventListener("click", () => {
    // console.log("button 1 was clicked");
    const display = document.querySelector(".display");
    display.value += "1";
});
btn2.addEventListener("click", () => {
    // console.log("button 2 was clicked");
    const display = document.querySelector(".display");
    display.value += "2";
});
btn3.addEventListener("click", () => {
    // console.log("button 3 was clicked");
    const display = document.querySelector(".display");
    display.value += "3";
});
btn4.addEventListener("click", () => {
    // console.log("button 4 was clicked");
    const display = document.querySelector(".display");
    display.value += "4";
});
btn5.addEventListener("click", () => {
    // console.log("button 5 was clicked");
    const display = document.querySelector(".display");
    display.value += "5";
});
btn6.addEventListener("click", () => {
    // console.log("button 6 was clicked");
    const display = document.querySelector(".display");
    display.value += "6";
});
btn7.addEventListener("click", () => {
    // console.log("button 7 was clicked");
    const display = document.querySelector(".display");
    display.value += "7";
});
btn8.addEventListener("click", () => {
    // console.log("button 8 was clicked");
    const display = document.querySelector(".display");
    display.value += "8";
});
btn9.addEventListener("click", () => {
    // console.log("button 9 was clicked");
    const display = document.querySelector(".display");
    display.value += "9";
});
btn0.addEventListener("click", () => {
    // console.log("button 0 was clicked");
    const display = document.querySelector(".display");
    display.value += "0";
});











const operators = ["+", "-", "*", "/"];

const addOperator = (operator) => {
    const display = document.querySelector(".display");

    if (operators.includes(display.value.slice(-1))) {
        return;
    }

    display.value += operator;
};

add.addEventListener("click", () => {
    addOperator("+");
});

subtract.addEventListener("click", () => {
    addOperator("-");
});

multiply.addEventListener("click", () => {
    addOperator("*");
});

divide.addEventListener("click", () => {
    addOperator("/");
});

clear.addEventListener("click", () => {
    const display = document.querySelector(".display");
    display.value = "";
});
    dot.addEventListener("click",()=> {
    const display= document.querySelector(".display");
    display.value += ".";


});


equals.addEventListener("click",()=> {
    const display= document.querySelector(".display");
    display.value= eval(display.value);
});



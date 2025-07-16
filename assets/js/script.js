'use strict';

let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let firstNumber = 0; // объявил переменную для того, чтобы запомнить первое число при любой операции
let operation = "=";
input.value = 0;
// 1 + 1 +

function updateFirstNumber(operation) {
    switch (operation) {
        case "+":
            firstNumber = +input.value + firstNumber;
            break;
        case "-":
            firstNumber = firstNumber - +input.value;
            break;
        case "*":
            firstNumber = firstNumber * +input.value;
            break;
        case "/":
            firstNumber = firstNumber / +input.value;
            break;
        case "=":
            firstNumber = +input.value;
    }
}


function addZero() {
    if (input.value !== "0") {
        input.value += '0';
    }
}

function sum() {
    updateFirstNumber(operation);
    input.value = "";
    operation = "+";
}

function subtraction() {
    updateFirstNumber(operation);
    input.value = "";
    operation = "-";

}

function multiplication() {
    updateFirstNumber(operation);
    input.value = "";
    operation = "*";
}

function division() {
    updateFirstNumber(operation);
    input.value = "";
    operation = "/";
}

function equally() {
    switch (operation) {
        case "+":
            input.value = String(+input.value + firstNumber);
            break;
        case "-":
            input.value = String(firstNumber - +input.value);
            break;
        case "*":
            input.value = String(firstNumber * +input.value);
            break;
        case "/":
            input.value = String(firstNumber / +input.value);
    }
    operation = "=";
}

buttons[0].addEventListener('click', () => {
    input.value !== "0" ? input.value += "7" : input.value = "7"
});
buttons[1].addEventListener('click', () => {
    input.value !== "0" ? input.value += "8" : input.value = "8"
});
buttons[2].addEventListener('click', () => {
    input.value !== "0" ? input.value += "9" : input.value = "9"
});
buttons[3].addEventListener('click', division);
buttons[4].addEventListener('click', () => {
    input.value !== "0" ? input.value += "4" : input.value = "4"
});
buttons[5].addEventListener('click', () => {
    input.value !== "0" ? input.value += "5" : input.value = "5"
});
buttons[6].addEventListener('click', () => {
    input.value !== "0" ? input.value += "6" : input.value = "6"
});
buttons[7].addEventListener('click', multiplication);
buttons[8].addEventListener('click', () => {
    input.value !== "0" ? input.value += "3" : input.value = "3"
});
buttons[9].addEventListener('click', () => {
    input.value !== "0" ? input.value += "2" : input.value = "2"
});
buttons[10].addEventListener('click', () => {
    input.value !== "0" ? input.value += "1" : input.value = "1"
});
buttons[11].addEventListener('click', subtraction);
buttons[12].addEventListener('click', addZero);
buttons[13].addEventListener('click', () => {
    input.value = "0";
    firstNumber = 0;
});
buttons[14].addEventListener('click', equally);
buttons[15].addEventListener('click', sum);


// 7 8 9 / 4 5 6 * 3 2 1 - 0 c = +

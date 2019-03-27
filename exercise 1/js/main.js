"use strict";
let a = +prompt("Array-in uzunlugu:");
let numbers = [];
for(let i = 0; i < a; i++)
{
    let userInput = +prompt( i+1 + "ci eded");
    numbers[i] = +userInput;
}
console.log(numbers.sort(function(a,b){return a-b}));
console.log("maximum is  " + numbers[numbers.length - 1]);
console.log("minimum is  " + numbers[a-numbers.length]);
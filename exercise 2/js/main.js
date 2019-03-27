"user strict";
let a = +prompt("Array-in uzunlugunu daxil et");
let numbers = [];
for(let i = 0; i<a; i++)
{
    let userInput = +prompt(i+1 +"ci ededi daxil edin");
    if (userInput%2==0) {
       numbers[i]=+userInput;
    }
}

console.log("cut ededler " + numbers);

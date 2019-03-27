"user strict";
let a = +prompt('Array-in uzunlugunu ddaxil et:');
let numbers = [];
let tekler= [];
let cutler= [];
let cem=0;
let cutlerin_cemi=0;
let teklerin_cemi=0;
for(let i=0;i<a;i++)
{
    let userInput=+prompt(i+1 +" ci ededi daxil edin");
    numbers[i]=+userInput;
    cem=cem+userInput;
    if (userInput%2==0) {
        cutler[i]=+userInput;
        cutlerin_cemi=cutlerin_cemi+userInput;
    }
    else{
        tekler[i]=+userInput;
        teklerin_cemi=teklerin_cemi+userInput;
    }
}

console.log("butun ededler " + numbers + " cemi " + cem);
console.log("cut ededler " + cutler + " cemi " + cutlerin_cemi);
console.log("tek ededler " + tekler + " cemi " + teklerin_cemi);

"user strict";
let words = [];
let min =100;
let max=0;
for(let i = 0;i<3;i++)
{
    let userInput= prompt(i+1 + "ci sozu yazin:");
    words[i]= userInput;

    if (words[i].length>max) {
        words[i]=max;
    }
    if (words[i].length<min) {
        words[i]=min;
    }

}

console.log(words);
console.log("en uzun soz: " + max );
console.log("en qisa soz: " + min );
var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
let arr=new Array();
let originalNum=number;
while (number % 2 == 0)
{
    arr.push(2);
    number /= 2;
}
for (let i = 3; i <= Math.sqrt(number); i += 2)
{
    while (number % i == 0)
    {
        arr.push(i);
        number /= i;
    }
}

if (number > 2){
arr.push(number);
}
console.log("Prime factors of "+originalNum+" : "+arr.join(','));
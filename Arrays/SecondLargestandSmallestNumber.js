let arr = new Array();
for(let i = 1; i < 10; i++){
    let randomValue = Math.floor(Math.random()*1000);
    arr.push(randomValue);
}
console.log("The Random Elements in an array are : ");
console.log(arr.join(','));
let secondMaxNumber=SecondLargest(arr);
let secondMinNumber=SecondSmallest(arr);
console.log("The Second Largest Number is : "+ secondMaxNumber);
console.log("The Second Smallest Number is : "+ secondMinNumber);

function SecondLargest(arr){
    let maxValue=Math.max(...arr);
    arr.splice(arr.indexOf(maxValue),1);
    return Math.max(...arr);
}
function SecondSmallest(arr){
    let minValue=Math.min(...arr);
    arr.splice(arr.indexOf(minValue),1);
    return Math.min(...arr);
}
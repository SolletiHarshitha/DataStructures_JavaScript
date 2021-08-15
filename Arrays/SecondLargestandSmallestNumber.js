let arr = new Array();
for(let i = 1; i <= 10; i++){
    let randomValue = Math.floor(Math.random()*1000);
    arr.push(randomValue); //Adding the values into array
}
console.log("The Random Elements in an array are : ");
console.log(arr.join(','));
let secondMaxNumber=SecondLargest(arr);
let secondMinNumber=SecondSmallest(arr);
console.log("The Second Largest Number is : "+ secondMaxNumber);
console.log("The Second Smallest Number is : "+ secondMinNumber);

function SecondLargest(arr){
    let maxValue=Math.max(...arr); //Finding the maximum number
    arr.splice(arr.indexOf(maxValue),1); //Remove the maximum number
    return Math.max(...arr); //Return the second maximum number
}
function SecondSmallest(arr){
    let minValue=Math.min(...arr); //Finding the minimum number
    arr.splice(arr.indexOf(minValue),1); //Remove the minimum number
    return Math.min(...arr); //Return the second minimum number
}
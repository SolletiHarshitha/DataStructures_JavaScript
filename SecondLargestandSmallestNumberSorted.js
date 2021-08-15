let arr = new Array();
for(let i = 1; i <= 10; i++){
    let randomValue = Math.floor(Math.random()*1000);
    arr.push(randomValue); //Adding the values into array
}
console.log("The Random Elements in an array are : ");
console.log(arr.join(','));
let sortedArray=arr.sort();
console.log("The Sorted array :");
console.log(sortedArray.join(','));
console.log("The Second Largest Number is : "+sortedArray[8]);
console.log("The Second Smallest Number is : "+sortedArray[1]);
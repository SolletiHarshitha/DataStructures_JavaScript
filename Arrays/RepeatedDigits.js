let arr=new Array();
let start=0;
let end=100;
for(let i=start;i<end;i++){
    if(RepeatedDigits(i)==1){
        arr.push(i); //Adding the repeated digits into array
    }  
}
console.log("The repeated digits in the range of 0-100 : "+arr.join(','));

function RepeatedDigits(num){
    let myArray=new Array();
    while(num!=0){
        let rem=num%10;
        if(myArray.indexOf(rem)!=-1){
        return 1; //Return 1 if there is any repeated digits
        }
        myArray.push(rem);
        num=Math.floor(num/10);
    }
    return 0; //Return 0 if there is no repeated digits
}
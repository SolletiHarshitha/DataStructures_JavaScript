let dice = new Map(); //Initialising Map
let roll = true;
let minKey = 0;
let maxKey = 0;
let count;
let minValue = 10;
while(roll){
    let diceValue = Math.floor(Math.random() * 6) + 1;
    if(dice.has(diceValue)){
        count = dice.get(diceValue);
        dice.set(diceValue,count+1);
    }
    else{
        count = 1;
        dice.set(diceValue,count);
    }
    if(dice.get(diceValue) == 10){
        roll = false;
        maxKey = diceValue;
    } 
}

for(let i = 1; i <= 6; i++){
    if(dice.get(i) < minValue){
        minValue = dice.get(i);
        minKey = i;
    }
}
console.log(dice);
console.log("The number that reached maximum number of times is : " + maxKey);
console.log("The number that reached minimum number of times is : " + minKey);
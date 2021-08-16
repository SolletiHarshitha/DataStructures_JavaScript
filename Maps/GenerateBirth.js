let month=new Map(); //Initialising Map
let individuals=50;
while(individuals>0){
    let monthName=getMonth(); //Get Month
    if(month.has(monthName)){ 
        //If map has monthname increment the value
        month.set(monthName,month.get(monthName)+1);
    }
    else{
        //If map doesn't has monthname add it
        month.set(monthName,1); 
    }
    individuals--;
}
console.log(month);

function getMonth(){
    let monthNumber=Math.floor(Math.random()*12)+1;
    switch(monthNumber){
        case 1:
            monthName="January";
            break;
        case 2:
            monthName="Febraury";
            break;
        case 3:
            monthName="March";
            break;
        case 4:
            monthName="April";
            break;
        case 5:
            monthName="May";
            break;
        case 6:
            monthName="June";
            break;
        case 7:
            monthName="July";
            break;
        case 8:
            monthName="August";
            break;
        case 9:
            monthName="September";
            break;
        case 10:
            monthName="October";
            break;
        case 11:
            monthName="November";
            break;
        case 12:
            monthName="December";
            break;
    }
    return monthName;
}
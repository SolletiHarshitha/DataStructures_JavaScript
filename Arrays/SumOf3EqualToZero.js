let arr = [0, 1, 2, -1, -3];
findTriplets(arr, arr.length);

function findTriplets(arr, len){
    let isFound = false;
    console.log("Sum of three numbers equal to zero are : ");
    for (let i = 0; i < len-2; i++)
    {
        for (let j = i+1; j < len-1; j++)
        {
            for (let k = j+1; k < len; k++)
            {
                if (arr[i] + arr[j] + arr[k] == 0)
                {
                    console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                    isFound = true;
                }
            }
        }
    }
    if(isFound == false)
    console.log("Not Exists");
}
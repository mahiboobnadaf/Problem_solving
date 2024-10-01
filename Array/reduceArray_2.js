// Find Max number from an array

const arr = [4, 6, 2, 10, 7];

// general example
function findMax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr))

// Using Reduce 
const output = arr.reduce((max, curr )=> {
    if(curr > max){
        max= curr;
    }
    return max
})
console.log(output)
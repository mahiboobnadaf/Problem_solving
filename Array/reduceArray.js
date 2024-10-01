// The reduce() Function

// The reduce function is used to calculate a single value based on array

// Syntax
//      let value = arr.reduce(function(accumulator, item, index, array) {
//          // ...
//      }, [initial]);

// Reduce takes Two parameters > 1. Function(acc,curr,idx, arr) 2. Initial value for accumulator

const arr = [4, 6, 2, 10, 7];

// finding Sum  General example

function findSum(arr){
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(findSum(arr))

// Reduce Example
const output = arr.reduce(function(acc,curr){
    acc = acc + curr
    return acc
},0);

console.log(output)
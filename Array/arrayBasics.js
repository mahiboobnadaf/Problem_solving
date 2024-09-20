//  an array is one of the most commonly used data types. It stores multiple values and elements in one variable. 
//  These values can be of any data type — 
//  we can store a string, number, boolean, and other data types in one variable.

// Array declaration
// 1. with Array constructor

let arr1 = new Array()
console.log(typeof arr1)

// 2. array with square brackets -> we can initialize this while declaring

let arr2 = [1,20];
console.log(arr2)

// Normal uses

arr2[2] = 30;       //add 30 at 2nd index
console.log(arr2) 

console.log(arr2[1])    // print value at 1st index

console.log(arr2.length)    // prints length of the array

console.log(arr2[-1])    // undefined coz , array does not support negative indexing

console.log(arr2[arr2.length -1])   // we can get last index with help of arr.length-1 

//or we can use arr.at(-1)

console.log(arr2.at(-1))        // prints last element in array

// array can store heterogenius elements
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

console.log(arr[1].name)    // prints name which is in object at index 1 of the array

arr[3]();           // call the function which is at index 3 prints hello


// Array using constructor
let arr4 = new Array(2);
console.log(arr4.length);       //2
console.log(arr4[1]);           //undefined
arr4.length = 4
console.log(arr4.length)        //4 


// Multi-dimensional array 
// example Matrics
let arr5 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arr5[0][2]);        //3
console.log(arr5[2][0]);        //7


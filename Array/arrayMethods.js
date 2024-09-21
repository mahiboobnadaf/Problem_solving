// // Add/remove items
// We already know methods that add and remove items from the beginning or the end:

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

//How to delete an element from array;

let arr = ['apple', 'mango', 'banana'];
delete arr[1];
console.log(arr)            // element is deleted
console.log(arr.length);    //but length is still 3

// The arr.splice method is a Swiss army knife for arrays. It can do everything: insert, remove and replace elements.


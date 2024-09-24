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

// arr.splice(start[, deleteCount, elem1, ..., elemN])
console.log("----array splice method----")

let arr2 = ['apple', 'mango', 'banana', 'pear', 'Orange', 'dragon' ];
arr2.splice(1,2);       // from index 1, remove 2 elements
console.log(arr2);      //['apple','pear','Orange', 'dragon']

let removedElem = arr2.splice(1,2,"banana",'pear'); // from index 1, remove 2 elemts and replace them with "banana","pear"

console.log(removedElem)    // ["pear","Orange"]

console.log(arr2);      //[ 'apple', 'banana', 'pear', 'dragon' ]

// The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0:

arr2.splice(2,0,"COCONUT");     //from index 2 , adds "COCONUT"
console.log(arr2);      // [ 'apple', 'banana', 'COCONUT', 'pear', 'dragon' ]

// Here and in other array methods, negative indexes are allowed.
// They specify the position from the end of the array, like here:

let arr3 = [1,2,5];
arr3.splice(-1,0,3,4)   // from index -1 (one step from the end)
                        // delete 0 elements,
                        // then insert 3 and 4
console.log(arr3);

console.log("----array slice method----")

// arr.slice([start], [end])
// It returns a new array copying to it all items from index start to end (not including end). 
// Both start and end can be negative, in that case position from array end is assumed.
// It’s similar to a string method str.slice, but instead of substrings, it makes subarrays.

console.log([1,2,3,4].slice(1,3))   //[2,3] not including end index(3rd index)

console.log([1,2,3,4].slice(-1,-3)) // [] empty

console.log([1,2,3,4].slice(0,-2)) // [1,2] 

console.log([1,2,3,4].slice(0)) // [1,2,3,4]

console.log([1,2,3,4].slice(-3)) // [2,3,4]

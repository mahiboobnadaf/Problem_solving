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


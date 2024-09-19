// Methods pop/push, shift/unshift

// A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

// * push appends an element to the end.
// * shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// There’s another use case for arrays – the data structure named stack.

// It supports two operations:

// * push adds an element to the end.
// * pop takes an element from the end.

// Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.

// In computer science, the data structure that allows this, is called deque.

// Pop()

let arr = ["Apple", "banana", "Mango"];
arr.pop();              // removes last element
console.log(arr);       //prints only ['Apple','banana']

// Push()

arr.push("Dates");      // add 'Dates' at end of array
console.log(arr)        // prints ['Apple','banana','Dates']

// Shift()

arr.shift();            // Removes first element from the arrat
console.log(arr)        // prints ['banana','Dates']

// Unshift()

arr.unshift("Apple");    // Add the element add beginning
console.log(arr)         // prints ['Apple','banana','Dates']

// Methods push() and unshift() can add multiple elements at once
arr.push("Orange", "Peach");
arr.unshift("Pineapple", "Lemon");

console.log(arr);       // prints: [ 'Pineapple', 'Lemon', 'Apple', 'banana', 'Dates', 'Orange', 'Peach' ]

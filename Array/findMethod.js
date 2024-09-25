// Imagine we have an array of objects. How do we find an object with a specific condition?

// The syntax is:

let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });   //Here the arr.find(fn) method comes in handy.


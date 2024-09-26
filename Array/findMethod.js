// Imagine we have an array of objects. How do we find an object with a specific condition?

// The syntax is:

let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });   //Here the arr.find(fn) method comes in handy.

// If it returns true, the search is stopped, the item is returned. If nothing is found, undefined is returned.

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // John

// The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

// The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

  
  // Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0
  
  // Find the index of the last John
(users.findLastIndex(user => user.name == 'John')); // 3
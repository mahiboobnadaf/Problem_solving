// The find method looks for a single (first) element that makes the function return true.

// If there may be many, we can use arr.filter(fn).

// The syntax is similar to find, but filter returns an array of all matching elements:

// let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
//   });


// Example:

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
]

let someUsers = users.filter((item,index,array) => {
    console.log(index,array) 
    return item.id<3
})
console.log(someUsers)
console.log(someUsers.length)

//example2
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word,index) =>{
    return word.length > 6 
} )


console.log(result);

result[0]="Mahiboob"

console.log(result , words)

// Example 3

function isBigEnough(value) {
    return value >= 10;
  }
  
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)
//OR
const filtered2 = [12,5,8,130,44].filter(item=>item>=10)
console.log(filtered2)

//exampe 4 prime number 
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//example 5 filtering  valid entry 
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  
  let invalidEntries = 0;
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  const arrByID = arr.filter(filterByID);
  
  console.log("Filtered Array\n", arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log("Number of Invalid Entries =", invalidEntries);

  //example 5 
  const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
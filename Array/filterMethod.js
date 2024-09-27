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
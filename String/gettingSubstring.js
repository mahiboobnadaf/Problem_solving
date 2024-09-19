// There are 3 ways to get a substring
// 1. slice()
// 2. substring()
// 3. substr()


let str  = "Mahiboob"
// 1. slice(startIndex , endIndex); 
//returns the part of the string from start to (but no including) end
console.log("---slice()---")

console.log(str.slice(0,6));    // returns Mahibo
console.log(str.slice(2));      // returns hiboob 
console.log(str.slice(0,-1))    // returns Mahiboo
console.log(str.slice())        // reuturns Mahiboob



// 2. substring(start, end); 
// returns the part of string between start and end (not including end)
// This is almost the same as slice, 
// but it allows start to be greater than end (in this case it simply swaps start and end values).
// Negative indexing is not supported in substring()

console.log("---substring()---")

console.log(str.substring(0,6))     // return Mahibo
console.log(str.substring(0))     // return Mahiboob
console.log(str.substring(8,2))     // return hi -> it swaps start and end index , it becomes (2,8)
console.log(str.substring(-2))     // does not print , 

// 3. substr(start , length)  
// it returns part of the string from start to given "length"

console.log("---substr()---")

console.log(str.substr(2,4))    //"hibo", start with 2th index, it will print from 2nd index - length is 4 characters 
console.log(str.substr(0))      //"Mahiboob"
console.log(str.substr(-2,5))   // start at -2 index to end of string


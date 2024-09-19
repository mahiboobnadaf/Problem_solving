// Searching for a substring
// There are Multiple ways to look for a Substring within string

//1. str.indexOf(substr, pos) ->pos is option , to start searching from given position
//  It looks for a substr in str, starting at given pos, and returns the position where the match found or -1 if not found

let str =  "Mahiboob Nadaf Bagalkot"
console.log(str.indexOf("b"))       // 4 is returned,when a match is found then searching stops,

console.log(str.indexOf("b",5))     // 7 is returned , coz it started searching from 5th index of str

console.log(str.indexOf("nadaf"))  // -1 , coz it is case sensitive so it did not found the match

console.log(str.indexOf("Baga"))    // 15

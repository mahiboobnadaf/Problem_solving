// Strings in Js are enclosed within  Singal quote '' ,Doble quote "" , Backtics `` 
//Singal quote and Doube quote are singal line statements , 
// Backtics are multiline statements


let str1 = "Hello Nadaf"

// String.at(position) , String[position] - methods

console.log(str1.at(6))     // N

console.log(str1.length)    // 11

console.log(str1[6])        // N

console.log(str1[str1.length-1]) // f

console.log(str1.at(-1)) // f

console.log(str1[-1]) // square brackets always return undefined for negativ indexes

// Iterating using for..of

for(let char of str1){
    console.log(char)       //prints each character line by line
}

console.log('----------------')
// Strings are immutable in Js , we cannot change a character

let str2 = "Hello" 
str2[0] = 'h'
console.log(str2)       // Does Not change the string

let str3 = "Hello"
str3 =  str3[4] + 'h'   //Only appends the string
console.log(str3)
// Strings in Js are enclosed within  Singal quote '' ,Doble quote "" , Backtics `` 
//Singal quote and Doube quote are singal line statements , 
// Backtics are multiline statements


let str1 = "Hello Nadaf"

// String.at(position) , String[position] - methods
console.log('----String Positions-------')

console.log(str1.at(6))     // N

console.log(str1.length)    // 11

console.log(str1[6])        // N

console.log(str1[str1.length-1]) // f

console.log(str1.at(-1)) // f

console.log(str1[-1]) // square brackets always return undefined for negativ indexes

// Iterating using for..of
console.log('----Iteration using for..of----')

for(let char of str1){
    console.log(char)       //prints each character line by line
}



// Strings are immutable in Js , we cannot change a character
console.log('----Strings are immutable-----')

let str2 = "Hello" 
str2[0] = 'h'
console.log(str2)       // Does Not change the string

let str3 = "Hello"
str3 =  str3[4] + 'h'   //Only appends the string
console.log(str3)

// Changing the case with methods toLowerCase()  and  toUpperCase()
console.log('-----Changing case-----')

console.log(str2.toLowerCase())

console.log(str2.toUpperCase())

console.log(str2[3].toUpperCase())

console.log(str2) // original value is not changed 

                // it is immutable , instead it creates a copy of str




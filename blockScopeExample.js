//Block Scope Example learning

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)                                                          // a is in global scope in browser        
// console.log(b)           // Reference error: b is not defined        // b is in block scope
// console.log(c)              // Reference error: c is not defined        // c is in block scope




// ------------------------------------------- //
console.log("// ------------------------------------ //")

let x = 10;
var y = 20;
const z = 30;
{
    // var x = 100;          //error: Identifier 'x' has already been defined         // It is called illegal shadowiing
    let x = 100;                 
    console.log(x);          // prints 100; coz it is in Block scope     // It is also called shadowing the outer variable

    var y = 200;
    console.log(y)          // prints 200; coz of the y value is 200 in lexical environment

    const z = 300;
    console.log(z);         // prints 300;  coz , same as let variable  // It is also called shadowing the outer variable
}

console.log(x);             // prints 10 ; coz this x is in script scope  

console.log(y);  // prints 200; coz y is in global scope & any changes scope other than function scope, will reflects in global value

console.log(z)              // prints 30; coz z is in script scope
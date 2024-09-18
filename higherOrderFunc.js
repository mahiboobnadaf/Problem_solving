// Higher Order Fucntion
    // A function which takes another fucntion as an argument pr returns a function from it , 
    // Is known as Higher order function

// Example

const greet = function(name){
    return function xyz(msg){
        console.log(`Hi !! ${name} , ${msg}`);       
    }
}
const greet_msg = greet("Mahiboob");
greet_msg("Welcome Home")

// Or we can Call shortcut as

greet("Rasool")("Welcome Home");
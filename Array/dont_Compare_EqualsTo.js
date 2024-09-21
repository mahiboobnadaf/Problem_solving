// Don’t compare arrays with ==
// Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

// This operator has no special treatment for arrays, it works with them as with any objects.

// Let’s recall the rules:

// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive,
// as explained in the chapter Object to primitive conversion.
// …With an exception of null and undefined that equal == each other and nothing else.
// The strict comparison === is even simpler, as it doesn’t convert types.

// So, if we compare arrays with ==, 
// they are never the same, unless we compare two variables that reference exactly the same array.

// For example:

alert( [] == [] ); // false
alert( [0] == [0] ); // false

//These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.

//Comparison with primitives may give seemingly strange results as well:

alert( 0 == [] ); // true

alert('0' == [] ); // false

//Here, in both cases, we compare a primitive with an array object. So the array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''.

// Then the comparison process goes on with the primitives, as described in the chapter Type Conversions:

// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings


//So, how to compare arrays?
//That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods 
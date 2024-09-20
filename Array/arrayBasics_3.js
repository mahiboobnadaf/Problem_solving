// `Internals
// An array is a special kind of object. The square brackets used to access a property arr[0], come from the object syntax.
// That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.`

// For instance, it is copied by reference:

let fruit = ['Banana'];
let arr = fruit;
console.log(arr)
console.log(arr == fruit)
console.log(arr === fruit)

arr.push('Apple')   //Adds apple at the end of array ,any change in arr is reflected in fruit, coz they share same reference 
console.log(arr);   
console.log(fruit)

fruit.push('Mango')  //Adds Mango at the end of fruit[] ,any change in fruit is reflected in arr, coz they share same reference 
console.log(arr);   
console.log(fruit)

/////////////////////////////
let arr2 = []; // make an array

arr2[99999] = 5; // assign a property with the index far greater than its length

arr2.age = 25;

console.log(arr2)
///

arr3 = [10,20];
console.log(arr3[0]+arr3[1])

var temp = arr3[0]+arr3[1];
console.log(temp)
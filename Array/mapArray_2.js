// Using parseInt() with map()
// It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors.
// Consider:


console.log(["1", "2", "3"].map(parseInt)); // [1,NaN,NaN]

// parseInt is often used with one argument, but takes two. 
// The first is an expression and the second is the radix to the callback function, 
// Array.prototype.map passes 3 arguments: the element, the index, and the array. 
// The third argument is ignored by parseInt — but not the second one! This is the source of possible confusion.


/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN

    // Syntax
//1. parseInt(string)
//2. parseInt(string, radix(base))

// To solve this, define another function that only takes one argument:

console.log(["1", "2", "3"].map((str) => parseInt(str, 10))); // [1, 2, 3]

// OR

let n = ["1","2","3"].map(Number)
console.log(n)

//
let filterednum = [1,2,3,4].map((num,index)=>{
    if(index<3){
        return num
    }
})
console.log(filterednum)

//
const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
  products.map((product) => {
    product.price = 100;
  });
  console.log(products)

//  As mentioned previously, this is an anti-pattern. If you don't use the return value of map(), use forEach() or a for...of loop instead.

products.forEach((product) => {
    product.price = 200;
  });
console.log(products)
//OR

const productsWithPrice = products.map((product) => {
    return { ...product, price: 100 };
  });

  console.log(productsWithPrice)
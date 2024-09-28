                      // Transform an array
// Let’s move on to methods that transform and reorder an array.

      // map
// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.

// The syntax is:

// let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
// });

let arr1 = [1,3,4,5];
let map1 = arr1.map(x=>x*2);
console.log(map1)

let map2 = [1,4,12].map(x=> Math.sqrt(x))
console.log(map2)

let arr2 = [
  {key:1 , value:100},
  {key:2 , value:200},
  {key:3 , value:300}
]
let map3 = arr2.map(({key,value})=> ({[key]:value}))
console.log(map3)
let arr = [10,1,2,18,21];
let arr2 = ["Its","a","Sunny","day",'&',29, "holiday"];

// arr.sort((a,b)=> a-b)
arr2.sort()

console.log(arr);  // [1,10,18,2,21]
// console.log(arr2);  // [ '&', 29, 'Holiday', 'Sunny', 'a', 'day', "it's" ]


console.log([10,12,4,2,50,1].sort((a,b)=>{
    console.log(`a:${a},b:${b}`)
    return a-b;
}))

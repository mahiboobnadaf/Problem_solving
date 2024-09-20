let arr = ['Apple', 'Banana', 'Mango'];

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("-------------")

for(let elem of arr){
    console.log(elem)
}   
    // The for..of doesn’t give access to the number of the current element, 
    // just its value, but in most cases that’s enough. And it’s shorter.

console.log("-------------")

for(let key in arr){
    console.log(arr[key])
}
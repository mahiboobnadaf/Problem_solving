let arr = ['Apple', 'Banana', 'Mango'];

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("-------------")

for(let elem of arr){
    console.log(elem)
}

console.log("-------------")

for(let elem in arr){
    console.log(arr[elem])
}
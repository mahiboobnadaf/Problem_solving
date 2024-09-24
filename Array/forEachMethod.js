// forEach() Method is an Iterative method. it provides callback function once for each array element
// Syntax  array.forEach(callback Funciton(Item, index , array))

['apple','mango','banana'].forEach((item,index,arr)=> {
    console.log(item)
    console.log(index)
    console.log(arr)

})

// There is no way to stop or break a forEach() loop other than by throwing an exception. 
// If you need such behavior, the forEach() method is the wrong tool.

//forEach() expects a synchronous function — it does not wait for promises.
// Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.


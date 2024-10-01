const users = [
    {firstName:"Mahiboob", lastName:"Nadaf", age:25},
    {firstName:"Anil", lastName:"Karikatti", age:26},
    {firstName:"Pramod", lastName:"Harti", age:25},
    {firstName:"Naveen", lastName:"Meherwade", age:24}
]
// List of all firstname and lastname
console.log(users.map(item => item.firstName + " " + item.lastName) )

// print all age group counts ex: {25:2},{24:1},{26:1},

const ouput = users.reduce((acc,curr)=>{
    console.log(acc)    
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }
    return acc
},{})

console.log(ouput)
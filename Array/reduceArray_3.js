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

// Prints the only firstanmes of users who has age above 24
// we can chain the methods

const output2 = users.filter(x=> x.age > 24).map(x=>x.firstName)
console.log(output2)

// or we can use reduce methods for the above question

const output3 = users.reduce((acc,curr)=>{
    if(curr.age > 24){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log(output3)
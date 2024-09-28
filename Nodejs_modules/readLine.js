const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var num1;
var num1;

rl.question("Enter Value for A: ",a=>{
    num1=Number(a) 
    myFun()
})
var myFun=(times)=>{
    rl.question("Enter value for B: ",b=>{
        num2 = Number(b);
        console.log(num1+num2)
        rl.close();
    })    
}



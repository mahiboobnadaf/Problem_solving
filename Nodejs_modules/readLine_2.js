const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


    rl.question("Enter Value for A: ",a=>{
        console.log(a)
        rl.question("Enter Value for B: ",b=>{
            console.log(Number(a)+Number(b))
        })
        rl.close()
    })





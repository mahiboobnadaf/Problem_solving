// A quize program
const prompt = require('prompt-sync')();

let questions = ['Are you male ', 'Are you female' , 'Are you above 18', 'Are you below 30', 'Are you Soft Engg'];
let pre_ans = ['y','n','y','y','n'];

let got_ans = [];
let score =0;

for(let elem of questions){
    // console.log(elem)
    got_ans.push(prompt(`${elem} ? : y/n \t`))
}

// console.log(got_ans)
for(let i=0;i<pre_ans.length;i++){
    if(pre_ans[i] == got_ans[i]){
        score++;
    }
}
console.log(`you have given ${score} right answers !`)
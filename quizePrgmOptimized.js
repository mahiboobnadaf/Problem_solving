// quize Prgm Optimized

const prompt = require('prompt-sync')();

let que_array = ['Are you male ', 'Are you female' , 
    'Are you above 18', 'Are you below 30', 'Are you Soft Engg'];

let actual_ans = ['y','n','y','y','n'];

let got_ans = [];

function askQuestions(questions){
    for(let elem of questions){
        got_ans.push(prompt(`${elem} ? : y/n \t`))
    }
    return checkResult(got_ans,actual_ans);
}

function checkResult(got_answers , pre_answers){
    let score =0;
    for(let i=0;i<pre_ans.length;i++){
        if(pre_answers[i] == got_answers[i]){
            score++;
        }
    }
    return (`you have given ${score} right answers !`)
}

console.log(askQuestions(que_array))
// const prompt = require('prompt-sync')(); 
let que_ans = [
    {
    question : "What is your Year of Birth ?",
    answer : [  {option : "2000",content : true},
                {option : "1990",content : false},
                {option : "1995",content : false},
                {option : "1998",content : false},
    ]
},

{
    question : "What is your College Name ?",
    answer : [  {option : "Jain",content : false},
                {option : "KLE",content : false},
                {option : "BVB",content : false},
                {option : "GPT",content : true},
    ]
},
{
    question : "What is your Percentage ?",
    answer : [  {option : "70",content : false},
                {option : "90",content : false},
                {option : "80",content : true},
                {option : "95",content : false},
    ]
},
{
    question : "What is your Home Town ?",
    answer : [  {option : "Hubli",content : true},
                {option : "Bagalkot",content : false},
                {option : "Savadatti",content : false},
                {option : "Bangalore",content : false},
    ]
}
]
let questionIndex = 0;

let questionBox = document.getElementById("questionBox")
// let questionText = questionBox.innerText
questionBox.innerText = '';

function displayQuestion(ind){
    const currentQuestion = questionIndex+1 + '. ' + que_ans[questionIndex].question
    questionBox.innerText = currentQuestion;
    var radioInput;

    que_ans[questionIndex].answer.forEach((item,i) => {
        const label = document.getElementById(`label${i+1}`);
        const radio = document.getElementById(`radio${i+1}`);
        radio.checked = false;
        radio.onclick = () => {
            // console.log(radio.value)
            checkResult(radio.value,questionIndex)
        }
        label.innerText=item.option;
        radio.value = item.option;
    } )
    // console.log(radioInput + '*')
}

function checkResult(btnInput,questionIdx){
    console.log(btnInput,questionIdx)
}


window.onload = displayQuestion(questionIndex)


        
    
    // inp = prompt("Enter your option Number : ")
    // if(inp >=1 && inp <=4 ){
    //     userInput.push(inp)  
    // }
    // else{
    //     console.log("wrong input : Terminated") 
    //     break
    // }


let userInput=[];
let correctAns = [];
let score =0;

// // console.log(userInput)

// for(i=0;i<que_ans.length;i++){
//     correctAns.push(que_ans[i].answer.findIndex(ans => ans.content == true)+1)
//     if(userInput[i] == correctAns[i]){
//         // console.log(correctAns)
//         score +=1;
//     }
// }
// console.log(`Your score is ${score} out of 4`)

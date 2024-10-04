// const prompt = require('prompt-sync')(); 
let questions =[
    {
    question : "What is your Year of Birth ?",
    options: [2000,1998,2001,1990],
    answer:2000 
},

{
    question : "What is your College Name ?",
    options :["Jain", "BVB","KLE","Reva",],
    answer: "BVB"
},
{
    question : "What is your Percentage ?",
    options: [80,70,60,90,],
    answer: 70
},
{
    question : "What is your Home Town ?",
    options:["Hubli","Savdatti","Bagalkot","Hyderabad"],
    answer: "Hyderabad"    
}
]
let questionIndex = 0;

let questionBox = document.getElementById("questionBox")
// let questionText = questionBox.innerText
questionBox.innerText = '';

function displayQuestion(ind){
    const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question
    questionBox.innerText = currentQuestion;
    var radioInput;

    questions[questionIndex].options.forEach((item,i) => {
        console.log(item)
        const label = document.getElementById(`label${i+1}`);
        const radio = document.getElementById(`radio${i+1}`);
        radio.checked = false;
        radio.onclick = () => {
            checkResult(radio.value,questionIndex)
        }
        label.innerText=item;
        radio.value = item;
    })
    // console.log(radioInput + '*')
    nextBtn.onclick=()=>{
        loadNextQuestion()
    }
}

function checkResult(btnInput,questionIdx){
    let score = 0;
    gotAnswer = {[btnInput] : questionIdx}
    actualAnswer = questions[questionIdx].answer
    if(btnInput == actualAnswer){
        console.log(btnInput)
        score++;
    }
    console.log(gotAnswer)
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

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
let gotAnswer={}

let questionBox = document.getElementById("questionBox")
// let questionText = questionBox.innerText
questionBox.innerText = '';

function displayQuestion(ind){
    const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question
    questionBox.innerText = currentQuestion;

    questions[questionIndex].options.forEach((item,i) => {
        // console.log(item)
        const label = document.getElementById(`label${i+1}`);
        const radio = document.getElementById(`radio${i+1}`);
        radio.checked = false;
        radio.onclick = () => {
            storeResult(radio.value,questionIndex)
        }
        label.innerText=item;
        radio.value = item;
    })
    // console.log(radioInput + '*')
    nextBtn.onclick=()=>{
        // console.log(questionIndex+1 + "indx")
        loadNextQuestion(questionIndex+1);
    }
}

function loadNextQuestion(questionIndex){
    let currentIndex = questionIndex;
    document.getElementById("nextBtn").innerText = "Next";

    if(questionIndex == questions.length-1){
        document.getElementById("nextBtn").innerText = "Submit";

    }
    if(questionIndex != questions.length){
        // console.log(gotAnswer)
        const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question
        questionBox.innerText = currentQuestion;
        document.getElementById("backBtn").disabled = false;

        questions[questionIndex].options.forEach((item,i) => {
            // console.log(item)
            const label = document.getElementById(`label${i+1}`);
            const radio = document.getElementById(`radio${i+1}`);
            radio.checked = false;
            radio.onclick = () => {
                storeResult(radio.value,questionIndex)
            }
            label.innerText=item;
            radio.value = item;
        })

        nextBtn.onclick=()=>{
            // console.log(questionIndex+1 +" " +"indx")
            loadNextQuestion(questionIndex+1);
        }

        backBtn.onclick=()=>{
            loadNextQuestion(questionIndex-1);
        }
    }
    
    else{
       calculateResult();
        // alert("Game Over")
    }
}

function calculateResult(){
    console.log(gotAnswer)

}

function storeResult(btnInput,questionIdx){
    let score = 0;
    gotAnswer = { [questionIdx] : btnInput }
    // calculateResult(gotAnswer)
    // actualAnswer = questions[questionIdx].answer
    // if(btnInput == actualAnswer){
    //     // console.log(btnInput)
    //     score++;
    // }
    // console.log(gotAnswer)
}
console.log(gotAnswer)

window.onload = displayQuestion(questionIndex)

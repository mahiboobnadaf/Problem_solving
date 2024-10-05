
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

let questionBox = document.getElementById("questionBox");
questionBox.innerText = '';

function displayQuestion(ind){
    const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question;
    questionBox.innerText = currentQuestion;

    questions[questionIndex].options.forEach((item,i) => {
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
        loadNextQuestion(questionIndex+1);
    }
}

function loadNextQuestion(questionIndex){
    
    document.getElementById("nextBtn").innerText = "Next";

    if(questionIndex == questions.length-1){
        document.getElementById("nextBtn").innerText = "Submit";

    }
    if(questionIndex != questions.length){
        const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question
        questionBox.innerText = currentQuestion;
        document.getElementById("backBtn").disabled = false;
        document.getElementById("backBtn").classList.add('pointer');

        questions[questionIndex].options.forEach((item,i) => {
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
            loadNextQuestion(questionIndex+1);
        }

        backBtn.onclick=()=>{
            loadNextQuestion(questionIndex-1);
        }
    }
    
    else{
       calculateResult();
    }
}

function calculateResult(){
    let score=0;
    
        for(i=0;i<Object.keys(gotAnswer).length;i++){
            if(gotAnswer[i] == questions[i].answer){
                console.log(gotAnswer[i] +" : "+ questions[i].answer + " "+ "Matched")
                score++;
            }
            else{
                console.log(gotAnswer[i] +" : "+ questions[i].answer +" "+ "Not matched")
            }
        }
        alert(`Your score is ${score} out of ${questions.length}`)
        window.onload = displayQuestion(0)
}

function storeResult(btnInput,questionIdx){
    gotAnswer[questionIdx] = btnInput;
}

window.onload = displayQuestion(questionIndex)

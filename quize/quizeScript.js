
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
    questionIndex = ind;
    const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question;
    questionBox.innerText = currentQuestion;

    let checked = false;

   
    
    document.getElementById("backBtn").disabled = true;
    document.getElementById("backBtn").classList.add('not-allowed');

    questions[questionIndex].options.forEach((item,i) => {
        const label = document.getElementById(`label${i+1}`);
        const radio = document.getElementById(`radio${i+1}`);
        radio.checked = false;
        radio.onclick = () => {
            checked = true;
            console.log(radio)
            storeResult(radio.value,questionIndex)
            
        }
        label.innerText=item;
        radio.value = item;
    })

    nextBtn.onclick=()=>{
        if(checked){
            loadNextQuestion(questionIndex+1);
        }
        else{
            alert("Select answer before clicking next")
        }
    }
}

function loadNextQuestion(questionIndex){
    let checked = false;
    if(questionIndex == 0){
        document.getElementById("backBtn").disabled = true;
        document.getElementById("backBtn").classList.add('not-allowed');
    }
    else{
        document.getElementById("backBtn").disabled = false;
        document.getElementById("backBtn").classList.replace('not-allowed','pointer');
    }


    if(questionIndex == questions.length-1){
        document.getElementById("nextBtn").innerText = "Submit";
    }
    else{
        document.getElementById("nextBtn").innerText = "Next";
    }

    if(questionIndex != questions.length){
        const currentQuestion = questionIndex+1 + '. ' + questions[questionIndex].question
        questionBox.innerText = currentQuestion;

        questions[questionIndex].options.forEach((item,i) => {
            const label = document.getElementById(`label${i+1}`);
            const radio = document.getElementById(`radio${i+1}`);
            radio.checked = false;
            radio.onclick = () => {
                checked = true;
                storeResult(radio.value,questionIndex)
            }
            label.innerText=item;
            radio.value = item;
        })

        nextBtn.onclick=()=>{
            if(checked){
                loadNextQuestion(questionIndex+1);
            }
            else{
                alert("gggg")
            }
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
        // radio.checked = false;
        window.onload = displayQuestion(0,false)
}

function storeResult(btnInput,questionIdx){
    gotAnswer[questionIdx] = btnInput;
}

window.onload = displayQuestion(questionIndex)
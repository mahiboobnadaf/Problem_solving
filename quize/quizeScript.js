const prompt = require('prompt-sync')(); 
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

// console.log(que_ans[0].question)
// let item= que_ans[0].answer.find(ans => ans.content == true)
// console.log(item.option)

for(let elem of que_ans){
    console.log(elem.question)
    elem.answer.forEach((item,index) => console.log(`${index+1}. ${item.option}`) )
    console.log("-")
}
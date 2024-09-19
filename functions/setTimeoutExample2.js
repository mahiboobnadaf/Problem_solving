//Program to print 1-5 number with its delay respectively

function x(){
    for (var i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i)                  
        }, i * 1000);
    }
}
// x()

// the above program should have to work , but unfortunetly it does't
// it prints 6 after each second
// This is because the in line 7 the i references to memory location of i not the value
// so in every iteration when i increments , it references to same memory location 
// that cause it is printing 6 every time, coz when console.log checks for i , it holds value 6


// To eliminate this problem , we can change var into let in loop


function x(){
    for (let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i)                  
        }, i * 1000);
    }
}
// x()

// This above works perfectly , becoz let is block scope variable, so in evry iteration it is new fresh variable


//There are some cases in which the interviewer ask us to print this without using let variable

// There we need to take help of Closure


function x(){
    for (var i=1;i<=5;i++){
        function closure(a){
            setTimeout(function(){
                console.log(a)                  
            }, a * 1000);
        }
        closure(i) 
    }
}
x()


//It works perfectly with help of closure
// here we took a new function to store setTimeout in it and to pass values through function
// so when loop iterates evrytime , the closure passes the value of i to the funciton , i.e new copy of i
// we know here cosure was formed so it remembers the lexical environment of it
// then after every delay it prints numbers accordingly
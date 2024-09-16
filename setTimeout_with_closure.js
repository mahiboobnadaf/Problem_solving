function x(){
    var i = 2;
    
    setTimeout(function(){
        console.log(i)                  // prints i after 2 second
    }, 2000);
    console.log("Mahiboob Nadaf")       //does not wait for setTimeout to execute 
}
x()

console.log("---------------")
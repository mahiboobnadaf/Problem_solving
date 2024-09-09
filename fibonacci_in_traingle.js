let series = [0 , 1];
let index = 0 
for(let i = 2 ; i <= 20; i++ ){
    series[i] = series[i-1] + series[i-2];
}

// console.log(series);

for(let i = 0 ; index < series.length ; i++){
    let str = ""
    for(let j = 0 ; j <= i ; j++){
        str += series[index] + " "
        index +=1;
    }
    console.log(str);
}
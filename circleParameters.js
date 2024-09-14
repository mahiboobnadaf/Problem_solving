const radius = [3,5,4,2]

function area(radius){
    return (Math.PI * radius * radius)
}

const calculate= function(radius,logic){
    const result=[]
    for(let i=0;i<radius.length;i++){
        // console.log(radius[i])
        result.push(logic(radius[i]))
    }
    console.log(result)
}

console.log(calculate(radius,area))
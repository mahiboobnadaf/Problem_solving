const radius = [3,5,4,2];

const calculateCircumference= function(radius){
    const result2 = []
    for (let i=0;i<radius.length;i++){
        result2.push(2 * Math.PI * radius[i])
    }
    return result2
}

console.log(calculateCircumference(radius))



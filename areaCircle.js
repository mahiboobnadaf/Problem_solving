const radius = [3,5,4,2];

const calculateArea =  function(radius){
    const result =[]
    for(let i=0;i<radius.length;i++){
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result
}
console.log(calculateArea(radius))

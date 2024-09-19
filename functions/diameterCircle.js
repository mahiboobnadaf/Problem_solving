const radius = [3,5,4,2];

const calculateDiameter = function(radius){
    const result3 = []
    for(let i=0 ; i<radius.length;i++){
        result3.push(2 * radius[i])
    }
    return result3
}
 console.log(calculateDiameter(radius))
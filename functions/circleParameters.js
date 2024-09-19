const radius = [3,5,4,2]

function area(radius){
    return Math.PI * radius * radius
}

function circumference(radius){
    return 2 * Math.PI * radius
}

function diameter(radius){
    return 2 * radius
}

const calculate= function(arr,logic){
    const result=[]
    for(let i=0;i<arr.length;i++){
        result.push(logic(arr[i]))
    }
    return result
}

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
console.log(calculate(radius,diameter))


// Another method to calculate the Area, circumference and diameter of circle

const calculatebyMap = function(arr,logic){
    return  arr.map(logic)
}

console.log(calculatebyMap(radius,area))
console.log(calculatebyMap(radius,circumference))
console.log(calculatebyMap(radius,diameter))
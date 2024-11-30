var addTwoNumbers = function(l1, l2) {
    // l1=Number(l1.reverse().join(''));
    // l2=Number(l2.reverse().join(''));

    // var result= String(l1+l2).split('').reverse()
    
    // return result
    let new_l1 = []
    let new_l2 = []

    for(let i=l1.length-1;i>=0;i--){
        new_l1.push(l1[i])
    }

    for(let i=l2.length-1;i>=0;i--){
        new_l2.push(l2[i])
    }

    console.log(Array.from(String(Number(new_l1.join(''))+Number(new_l2.join(''))).split('').reverse().join(''),Number))
    

};

console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
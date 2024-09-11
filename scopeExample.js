
let obj = {name : "anil"};

let obj2  = {name : "anil",address : {area : {floor : "5th fllorr"}}};

let obj3 = JSON.stringify(obj2);

obj3 = JSON.parse(obj3);

obj3.address.area.floor = "hyderbad"

console.log(obj2 , obj3);


// destructing 

// let {name} = obj ;
// let {name,hg,hjgmjh,jkg, hg, f}= obj;

let arr = [100, 300];


let [a,b] = arr;

console.log(a , b);

[b,a] = arr;

console.log(a , b);

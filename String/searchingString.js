let str = "Mahiboob Nadaf is from Bagalkot";

let target = "a"

let pos = 0

console.log("---while loop---")

while(true){

    let foundPos = str.indexOf(target,pos)

    if(foundPos == -1) break;

    console.log(foundPos)

    pos = foundPos + 1
}

console.log("---short cut while loop---")

let pos2 = -1
while((pos2 = str.indexOf(target,pos2 +1) )!= -1){
    console.log(pos2)
}

console.log("---using for loop---")

for(let i=0;i<=str.length;i++){
    let p = str.indexOf(target,i)
    if(p == -1) break;
    console.log(p)
    i=p+1
}

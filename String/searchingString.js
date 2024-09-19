let str = "Mahiboob Nadaf is from Bagalkot";

let target = "a"

let pos = 0

while(true){

    let foundPos = str.indexOf(target,pos)

    if(foundPos == -1) break;

    console.log(foundPos)

    pos = foundPos + 1
}
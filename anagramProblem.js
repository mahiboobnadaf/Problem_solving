function isAnagram(str1,str2){
    
    if(str1.length != str2.length){
        return false
    }

    let sorted1 = str1.split('').sort();
    let sorted2 = str2.split('').sort();

    console.log(sorted1,sorted2)

    for(let i=0;i<sorted1.length;i++){
        if(sorted1[i] != sorted2[i])
            return false
    }

    return true
}

// console.log(isAnagram("abcd","acdb"))

if(isAnagram("abcd","acdb")){
    console.log("Yes! it is ANAGRAM")
}
else{
    console.log("No! its not Anagram")
}
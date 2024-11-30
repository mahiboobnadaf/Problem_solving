var longestCommonPrefix = function(strs) {
    let prefix ="";
    let longestLengthElement = strs.reduce((largest, current) =>
        (current > largest ? current : largest)).length;

    for(let i=0;i<longestLengthElement;i++){
        if(!strs[0][i]) return prefix
        let new_arr = strs.map(item => item[i])
        let arr2 = new_arr.every(elem => elem?.[0] == strs[0][i])
        if(!arr2) return prefix

        prefix+=strs[0][i]
    }
    return prefix
};


console.log(longestCommonPrefix(["flower","flow","flight"]))
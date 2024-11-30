var isPalindrome = function(x) {
    var rev = Number(String(x).split('').reverse().join(''))
    if(rev == x){
        return true
    }
    return false
};

console.log(isPalindrome(121))
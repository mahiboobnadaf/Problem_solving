// 1) FIND THE TOTAL NUMBER OF BRACKETS IN A ARRAY
// 2) SEE IF THE ORDER OR NUMBER OF BRACKETS IS CORRECT

function calculateBracket(arr) {
    let stack = [];
    let counts = { flower: 0, square: 0, curve: 0 };
    const matchingBrackets = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for (let char of arr) {
        if (matchingBrackets[char]) {
            stack.push(char);
            console.log(char)
        } else if (Object.values(matchingBrackets).includes(char)) {
            let lastOpened = stack.pop();
            if (matchingBrackets[lastOpened] !== char) {
                return "bracket error";
            }

            // Count the matched brackets
            if (lastOpened === '{') counts.flower++;
            else if (lastOpened === '[') counts.square++;
            else if (lastOpened === '(') counts.curve++;
        }
    }
    if (stack.length > 0) {
        return "bracket error";
    }
    return `flower: ${counts.flower}, square: ${counts.square}, curve: ${counts.curve}`;
}
let arr = ["[","{", "[", "(", ")", "]", "}","]"];
console.log(calculateBracket(arr));
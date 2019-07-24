// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
function solution(digits){
    let str = String(digits);
    let greatest = parseInt(str.slice(0,5));
    for (let i = 1; i < str.length; i++) {
        if (str.slice(i,i+5) > greatest) {
            greatest = parseInt(str.slice(i,i+5));
        }
    }
    return greatest;
}
console.log(solution(12345878993212));
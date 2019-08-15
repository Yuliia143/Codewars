// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending){
    return str.endsWith(ending);
}
console.log(solution('abc','d'));
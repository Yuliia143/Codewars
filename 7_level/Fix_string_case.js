// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
function solve(s){
    let countL=0;
    let countU=0;
    for (let i=0; i<s.length; i++){
        if(s[i]===s[i].toLowerCase()){
            countL++;
        }
        else
            countU++
    }
    return countL>=countU?s.toLowerCase():s.toUpperCase();
}
console.log(solve('codE'));
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
function calculate(str) {
    return (eval(str.replace(/plus/g,'+').replace(/minus/g,'-'))).toString();
}
console.log(calculate("1plus2minus1"));
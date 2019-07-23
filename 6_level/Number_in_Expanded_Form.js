// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
    var resArr =[];
    let v = 1;
    num
        .toString()
        .split("")
        .reverse()
        .map(item =>{
            let mult = item * v;
            if (mult > 0 ){
                resArr.push(mult);
            }
            v *= 10;});
    return resArr.reverse().join(" + ");
}
console.log(expandedForm(12));
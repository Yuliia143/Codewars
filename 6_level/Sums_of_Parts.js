// ls = [0, 1, 3, 6, 10]
//
// Its following parts:
//
//     ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

//long solution
function partsSums(ls) {
    let sum = [];
    while(ls.length!==0) {
        sum.push(ls.reduce((sum,current)=>sum+current));
        ls.shift();
    }
    sum.push(0);
    return sum;
}

//good solution
function partsSums(ls) {
    let sumArr = [0];
    let sum=0;
    for(let i = ls.length-1; i>=0; i--){
        sum+=ls[i];
        sumArr.push(sum);
    }
    return sumArr.reverse();
}
console.log(partsSums([0,1,3,6,10]));
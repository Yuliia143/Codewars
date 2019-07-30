// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit
function persistence(num) {
    let res=0;
    let count = 0;
    while(!/^\d$/.test(num)){
        let arr = num.toString().split('').map(Number);
        res = arr.reduce((a,b)=>a*b);
        count++;
        num = res;
    }
    return count;
}
console.log(persistence(39));
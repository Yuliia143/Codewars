// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors(integer) {
    let i = 2;
    let arr= [];
    while(i<integer){
        if (integer%i===0) {
            arr.push(i);
        }
        i++;
    }
    return !arr.length ? integer + ' is prime' : arr;
};
console.log(divisors(12));
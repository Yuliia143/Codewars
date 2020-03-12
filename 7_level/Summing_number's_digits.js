// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5
function sumDigits(number) {
    return Math.abs(number).toString().split('').map(Number).reduce((cur,sum)=>cur+sum);
}
console.log(sumDigits(99));
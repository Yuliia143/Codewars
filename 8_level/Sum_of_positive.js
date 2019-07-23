// Example [1,-4,7,12] => 1 + 7 + 12 = 20
function positiveSum(arr) {
    var sum = 0;
    var positiveArr = arr.forEach(function (number) {
        if(number >= 0){
            sum += number;
        }
    })
    return sum;
}
// modified
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1,-2,3,0,-9]));
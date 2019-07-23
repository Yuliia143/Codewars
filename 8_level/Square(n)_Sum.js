// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    var result = 0;
    for(let i = 0; i<numbers.length; i++){
        result += Math.pow(numbers[i],2);
    }
    return result;
}
console.log(squareSum([1,2,2]));
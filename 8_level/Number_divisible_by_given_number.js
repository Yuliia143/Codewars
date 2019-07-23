// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
function divisibleBy(numbers, divisor){
    return numbers.filter( a => (a%divisor===0) );
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
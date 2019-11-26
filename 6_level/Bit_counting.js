// The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function(n) {
    return n.toString(2)
        .split('')
        .map(a=>parseInt(a))
        .reduce((sum, cur) => sum + cur, 0);
};
console.log(countBits(1234));
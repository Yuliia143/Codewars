// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true
// isSquare(26) returns  false
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
};
console.log(isSquare(4));
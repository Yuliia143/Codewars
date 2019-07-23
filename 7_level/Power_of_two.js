// a power of two is a number of the form 2n where n is an integer
function isPowerOfTwo(n){
    if(n===1 || n===2){
        return true;
    }
    if(n===0){
        return false;
    }
    else{
        while(Number.isInteger(n) && n>2){
            n/=2;
        }
        return n%2===0;
    }
}
// modified
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}
console.log(isPowerOfTwo(1024));
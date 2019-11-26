// Given a positive integer N, return the largest integer k such that 3^k < N.
//     For example,
// largest_power(3) == 0
// largest_power(4) == 1
function largestPower(n){
    let k = 0;
    while(Math.pow(3,k)<n){
        k++;
    }
    return k-1;
}
console.log(largestPower(4));
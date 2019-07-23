// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
function GetSum( a,b ){
    let arr = [];
    let sum = 0;
    if(a<=b) {
        while (a <= b) {
            arr.push(a);
            sum+=a;
            a++;
        }
    }
    else{
        while (a >= b) {
            arr.push(b);
            sum+=b;
            b++;
        }
    }
    return sum;
}
console.log(GetSum(1,3));
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221
function descendingOrder(n){
    return +n
        .toString()
        .split('')
        .sort((a,b )=> b-a)
        .join('')
}

console.log(descendingOrder(12345));
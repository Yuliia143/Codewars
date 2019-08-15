// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
//
//     [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

function mergeArrays(a, b) {
    let resArr = [];
    let len = a.length >= b.length ? a.length : b.length;
    for(let i = 0; i<len; i++){
        resArr.push(a[i]);
        resArr.push(b[i]);
    }
    return resArr.filter(x=>x !== undefined);
}
console.log(mergeArrays([1,2,3],[a,b,c,d,e,f]));
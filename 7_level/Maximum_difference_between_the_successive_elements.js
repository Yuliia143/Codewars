// Find The maximum difference between the successive elements in its sorted form.
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
//     The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
//     The Maximum Gap after sorting the array is 23 , The difference between |-3- (-27) | = 23 .
function maxGap (numbers){
    var sortArr = numbers.sort((a,b)=>(a-b)).reverse();
    var res = [];
    for (let i = 0; i<sortArr.length-1; i++){
        var p = sortArr[i]-sortArr[i+1];
        res.push(p);
    }
    return Math.max(...res);
}
console.log(maxGap([13,10,5,2,9]));
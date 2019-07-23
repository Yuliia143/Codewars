// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
    let countPos = 0;
    let sumNeg = 0;
    if(input === null || input.length===0){
        return [];
    }
    else{
        input.map(item => Math.sign(item) === 1 ? countPos++ : sumNeg += item);
        return [countPos, sumNeg];
    }
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
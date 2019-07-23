// The sequence is defined by 3 non-negative values: begin, end, step.
//If begin value is greater than the end, function should returns 0
//Examples
//sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
const sequenceSum = (begin, end, step) => {
    let result =0;
    if(end<begin){
        console.log(0);
    }
    while(begin<= end) {
        result+=begin;
        begin+=step;
    }
    return result;
};
console.log(sequenceSum(2,2,2));
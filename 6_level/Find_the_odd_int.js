// Given an array, find the int that appears an odd number of times.
//     There will always be only one integer that appears an odd number of times.
// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
// doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
// doTest([10], 10);

function findOdd(A) {
    let obj = {};
    A.forEach(num => {obj[num]?obj[num]++:obj[num]=1})
    for(let key in obj){
        if(obj[key]%2!==0){
            return +key;
        }
    }
}
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
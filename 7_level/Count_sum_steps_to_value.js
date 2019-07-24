// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
//     We add two smallest elements (1 + 2), their sum is 3 .
//     Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
//     Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
//
// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// Explanation:
//     We add two smallest elements (4 + 2), their sum is 6 .
//     Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
//     Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
//     Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
function minimumSteps(numbers, value){
    var sortArr = numbers.sort((a,b)=>(a-b));
    var sum = sortArr[0];
    var count = 0;
    for (let i = 1; i<sortArr.length; i++){
        if (sum < value){
            sum += sortArr[i];
            count++;
        }
    }
    return count;
}
console.log(minimumSteps([8,9,4,2],23));
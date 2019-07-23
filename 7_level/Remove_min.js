// Do not mutate the original array/list
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]
function removeSmallest(numbers) {
    let cloneArr = numbers.slice();
    let  min1 = Math.min(...cloneArr);
    pos = cloneArr.indexOf(min1);
    cloneArr.splice(pos,1);
    return cloneArr;
}
console.log(removeSmallest([2,2,1,2,1]));
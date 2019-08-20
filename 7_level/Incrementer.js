// incrementer([1,2,3]) => [2,4,6]
// 1+1position , 2+2position, 3+3position
// incrementer([4,6,9,1,3]) => [5,8,2,5,8]
//
// - 9 + 3 (position of 9 in array) = 12
//     - Only its last digit 2 should be returned
function incrementer(nums) {
    let res = [];
    for(let i = 0; i<nums.length; i++){
        (nums[i]+i+1)>=10?res.push((nums[i]+i+1)%10):res.push(nums[i] + i+1);
    }
    return res;
}
console.log(incrementer([4,6,9,1,3]));
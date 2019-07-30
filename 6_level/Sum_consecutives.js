// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
//
// """So as you can see sum of consecutives 1 is 1
// sum of 3 consecutives 4 is 12
// sum of 0... and sum of 2
// consecutives 3 is 6 ..."""
//
//     [1,1,7,7,3] # should return [2,14,3]
//     [-5,-5,7,7,12,0] # should return [-10,14,12,0]
function sumConsecutives(s) {
    let res = [];
    let temp =0;
    for(let i=0; i<s.length; i++){
        if(s[i]===s[i+1]){
            temp+=s[i];
        }
        else if(s[i]!==s[i+1])
        {
            res.push(temp+s[i]);
            temp=0;
        }
    }
    return res;
}
console.log(umConsecutives([1,1,1,7,7,3]));
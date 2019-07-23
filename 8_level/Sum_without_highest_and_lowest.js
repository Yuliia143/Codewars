// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
function sumArray(array) {
    var res = 0;
    if(array === null || array.length<2){
        return 0;
    }
    else{
        var sortArr = array.sort((a,b)=>a-b);
        for(let i=1; i<sortArr.length-1; i++){
            res += sortArr[i];
        }
        return res;
    }
}
console.log(sumArray([6,2,1,8,10]));
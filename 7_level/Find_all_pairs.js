// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
function duplicates(array){
    let count = 0;
    var sortarr = array.sort((a,b)=>a-b);
    for (let i = 0; i<sortarr.length; i++){
        if(sortarr[i]===sortarr[i+1]){
            count++;
            i++;
        }
    }
    return count;
}
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
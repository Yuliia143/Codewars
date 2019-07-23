// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    var mult = 1;
    for (var i = 0; i<x.length; i++){
        mult *= x[i];
    }
    return mult;
}

// modified
function grow(x){
    return x.reduce((a,mult)=>(mult*a));
}

console.log(grow([1,2,3,4]));
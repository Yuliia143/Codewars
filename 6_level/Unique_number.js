// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
function findUniq(a){
    for (var i in a){
        if (a.indexOf(a[i]) === a.lastIndexOf(a[i]))
        {
            return a[i];
        }
    }
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
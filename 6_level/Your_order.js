// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

function order(words){
    let arr = words.split(' ');
    let obj = {};
    if(arr.length===1){
        return arr[0];
    }
    else{
        arr.forEach(elem => {
            let k = elem.match(/\d+/g).map(Number);
            obj[elem] = k[0];
        });
        keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]});
        return keysSorted.join(' ');
    }

}
console.log(order('is2 Thi1s T4est 3a'));
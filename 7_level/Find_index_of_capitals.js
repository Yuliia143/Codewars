// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
var capitals = function (word) {
    let res = [];
    for(let i = 0; i<word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            res.push(word.indexOf(word[i]));
        }
    }
    return res;
};
console.log(capitals('cOdE'));
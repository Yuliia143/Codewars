// given a string of words, return the length of the shortest word(s).
function findShort(s){
    var strLength = s.split(' ').map(function (item) {
        return item.length;
    });
    return strLength.reduce((a, b) => Math.min(a, b));
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
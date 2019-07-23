// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// result: "found the needle at position 5"

function findNeedle(haystack) {
    let str = 'found the needle at position ';
    return str + haystack.indexOf('needle');
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
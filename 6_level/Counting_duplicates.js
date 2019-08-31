// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
function duplicateCount(text) {
    let obj = {};
    let count = 0;
    [...text.toLowerCase()].forEach(num => {
        obj[num] ? obj[num]++ : obj[num] = 1;
    });
    for (let key in obj) {
        if (obj[key] > 1) {
            count++;
        }
    }
    return count;
}
console.log(duplicateCount('ABBA'));
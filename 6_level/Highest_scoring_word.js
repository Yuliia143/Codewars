// Test.describe("Example tests",_=>{
//     Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//     Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
//     Test.assertEquals(high('take me to semynak'), 'semynak');
// }); a = 1, b = 2, c = 3 etc.
function high(x) {
    let arrOfSum = [];
    let arrOfWords = x.split(' ');
    for (let i = 0; i < arrOfWords.length; i++) {
        arrOfSum.push(arrOfWords[i].split('')
            .map(item => item.charCodeAt() - 96)
            .reduce((current, sum) => sum + current, 0));
    }
    let position = arrOfSum.indexOf(Math.max(...arrOfSum));
    return arrOfWords[position];
}
console.log(high('take me to semynak'));
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = (str.match(/[aeiou]/ig)||[]).length;
    return vowelsCount;
}
console.log(getCount('artouy'));
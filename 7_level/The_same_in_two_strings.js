// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    let newStr = s1+s2;
    return newStr
        .split('')
        .sort()
        .filter((item , pos, self) =>(self.indexOf(item) === pos))
        .join('');
}
console.log(longest("aretheyhere", "yestheyarehere"));
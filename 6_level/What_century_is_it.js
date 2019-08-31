// Input: 1999 Output: 20th
// Input: 2011 Output: 21st
// Input: 2154 Output: 22nd
// Input: 2259 Output: 23rd
// Input: 1124 Output: 12th
// Input: 2000 Output: 20th
function whatCentury(year) {
    let cent = Math.ceil(year / 100);
    let ost = cent % 10;
    if (cent > 20) {
        switch (ost) {
            case(1):
                return cent + 'st';
            case(2):
                return cent + 'nd';
            case(3):
                return cent + 'rd';
            default:
                return cent + 'th';
        }
    } else {
        return cent + 'th';
    }
}
console.log(whatCentury(1999));
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
function getMiddle(s)
{
    return s.length%2!==0 ? s.charAt(s.length/2): s.charAt(s.length/2 -1)+s.charAt(s.length/2);
}
console.log(getMiddle('test'));
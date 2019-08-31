// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
// Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
// Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
// Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
function capitalize(s){
    let evens = [...s].map((l,ix) => (ix % 2 === 0) ? l.toUpperCase() : l.toLowerCase());
    let odds = [...s].map((l,ix) => (ix % 2 !== 0) ? l.toUpperCase() : l.toLowerCase());
    return [evens.join(""), odds.join("")];
};
console.log(capitalize('codewarriors'));
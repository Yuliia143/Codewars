// You will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number
// Test.assertEquals(solve('gh12cdy695m1'),695);
// Test.assertEquals(solve('2ti9iei7qhr5'),9);
// Test.assertEquals(solve('vih61w8oohj5'),61);
// Test.assertEquals(solve('f7g42g16hcu5'),42);
// Test.assertEquals(solve('lu1j8qbbb85'),85);
function solve(s){
    return Math.max(...s.match(/\d+/g));
};
console.log(solve('gh12cdy695m1'));
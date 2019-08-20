// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
function mxdiflg(a1, a2) {
    if(a1.length===0||a2.length===0){
        return -1;
    }
    else{
        let lengthsA = a1.map(item => item.length);
        let lengthsB = a2.map(item => item.length);
        return Math.max(Math.max(...lengthsA) - Math.min(...lengthsB) , Math.max(...lengthsB) - Math.min(...lengthsA));
    }
}
console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));
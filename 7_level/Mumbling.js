// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
    let res = "";
    for(let i = 0; i<s.length; i++) {
        res += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + "-";
    }
    return res.replace(/-$/,"");
}
console.log(accum("abcd"));
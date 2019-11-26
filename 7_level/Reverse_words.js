// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    return str
        .split(" ")
        .map(item=>item.split("").reverse().join(""))
        .join(" ");
}
console.log(reverseWords("This is an example!"));
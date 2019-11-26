// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
function spinWords(str){
    let sentence = '';
    str.split(' ').map(word=>{
        (word.length>=5) ? sentence += word.split('').reverse().join('') + " " : sentence += word + " ";
    });
    return sentence.trim();
}
console.log(spinWords("Hey fellow warriors"));
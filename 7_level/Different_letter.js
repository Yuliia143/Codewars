// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case
function isIsogram(str){
    let array = str.toLowerCase().toString().split('');
    console.log(array);
    let obj = {};
    let cur = true;
    array.forEach(letter => {
        obj[letter] ? cur = false : true;
        obj[letter] = true;
    });
    return cur;
}
console.log(isIsogram('aba'));
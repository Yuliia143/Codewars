// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//     ["a","b","c","d","f"] -> "e"
//     ["O","Q","R","S"] -> "P"
function findMissingLetter(array){
    for (let i=0; i<array.length-1; i++) {
        if((array[i+1].charCodeAt()-array[i].charCodeAt())===2) {
            return String.fromCharCode(array[i].charCodeAt()+1);
        }
    }
}
console.log(findMissingLetter(["a","b","c","d","f"]));
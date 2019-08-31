// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
function alphabetPosition(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let obj = {};
    let count=1;
    alphabet.forEach(num => {
        obj[num]=count;
        count++;
    });
    let array = [...text.replace(/[^a-zA-Z]/g,'').toLowerCase()];
    return array.map(item=>{
        for(let key in obj){
            if (item===key){
                return item = obj[key];
            }
        }
    }).join(' ');
}
console.log(alphabetPosition('This'));
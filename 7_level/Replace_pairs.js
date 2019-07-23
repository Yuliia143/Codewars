// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"
function DNAStrand(dna){
    let pairs = {A:'T',T:'A',C:'G',G:'C'};
    return dna.replace(/./g, c => pairs[c]);
}
console.log(DNAStrand('ATTGC'));
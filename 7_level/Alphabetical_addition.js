// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
function addLetters(...letters) {
    if (letters.length === 0) return 'z';
    else {
        let code = letters
            .map(item => item.charCodeAt() - 96)
            .reduce((sum, current) => sum + current);
        while (code + 96 > 122) {
            code = code+96-122;
        }
        return String.fromCharCode(code + 96);
    }
}
console.log(addLetters('a','b','c'));
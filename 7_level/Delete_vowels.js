// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'');
}
console.log(disemvowel("This website is for losers LOL!"));
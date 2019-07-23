// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
function likes(names) {
    let otherElem = names.length - 2;
    switch (names.length) {
        case 0 :
            return "no one likes this";
            break;
        case 1 :
            return names + " likes this";
            break;
        case 2 :
            return names[0] + " and " + names[1] + " like this";
            break;
        case 3 :
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
            break;
        default :
            return names[0] + ", " + names[1] + " and " + otherElem +" others like this";
    }
}
console.log(likes([]));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)\w/g, l => l.toUpperCase());
};
console.log('\'How can mirrors Be real if our Eyes Aren\\\'t Real\''.toJadenCase());
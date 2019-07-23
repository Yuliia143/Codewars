// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
String.prototype.toAlternatingCase = function () {
    var result = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase();
        }
        else {
            result += this[i].toUpperCase();
        }
    }
    return result;
};
console.log("HeLLo WoRLD".toAlternatingCase());
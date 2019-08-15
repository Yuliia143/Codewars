// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
function maskify(cc) {
    return cc.replace(/\w(?=\w{4})/g, '#');
}
console.log(maskify('234566'));
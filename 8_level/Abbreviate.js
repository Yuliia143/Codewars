// Sam Harris => S.H
// Patrick Feeney => P.F
function abbrevName(name){
    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
}
console.log(abbrevName("Sam Harris"));
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false
function validatePIN (pin) {
    var symbols = /^[0-9]+$/g;
    if ( (pin.match(symbols)) && ((pin.length === 4) || (pin.length === 6))) {
        return true;
    } else {
        return false;
    }
}
// modified
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePIN('12345'));
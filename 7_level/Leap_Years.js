// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
console.log(isLeapYear(1234));
console.log(isLeapYear(1984));
console.log(isLeapYear(2013));
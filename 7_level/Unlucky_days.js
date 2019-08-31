// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//     Find the number of Friday 13th in the given year.
//     Input: Year as an integer.
//     Output: Number of Black Fridays in the year as an integer.
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
function unluckyDays(year){
    let count =0;
    let date = new Date(year,0);
    let nextDate = new Date(year+1,0);
    let nextDay = date.getDay();
    while(date<nextDate) {
        if (date.getDate() === 13 && date.getDay() === 5) {
            count++;
        }
        date = new Date(year, 0, nextDay);
        nextDay++;
    }
    return count;
}
console.log(unluckyDays(2015));
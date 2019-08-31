// Test.assertEquals(getDayOfTheWeek('1/1/2017'), 'Sunday');
// Test.assertEquals(getDayOfTheWeek('12/24/2015'),'Thursday');
// Test.assertEquals(getDayOfTheWeek('2/24/1982'),'Wednesday');
// Test.assertEquals(getDayOfTheWeek('6/2/1952'),'Monday');
// Test.assertEquals(getDayOfTheWeek('8/21/1998'),'Friday');
function getDayOfTheWeek(date) {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(date).getDay()];
}
console.log(getDayOfTheWeek('1/1/2017'));
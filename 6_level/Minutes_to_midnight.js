// let dateBeforeMidnight = new Date(new Date().setHours(23,59,0,0));
// Test.assertEquals(minutesToMidnight(dateBeforeMidnight), "1 minute");
//
// let fullDay = new Date(new Date().setHours(0,0,0,0));
// Test.assertEquals(minutesToMidnight(fullDay), "1440 minutes");
function minutesToMidnight(d){
    let nextDay = new Date(new Date(d).setHours(0,0,0,0));
    nextDay.setDate(d.getDate()+1);
    return `${Math.round((nextDay - d) / 60000)} minute${nextDay - d > 60000 ? "s" : ""}`;
}
console.log(minutesToMidnight(new Date(new Date().setHours(23,59,0,0))));
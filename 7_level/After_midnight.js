// dayAndTime(0)       should return 'Sunday 00:00'
// dayAndTime(-3)      should return 'Saturday 23:57'
// dayAndTime(45)      should return 'Sunday 00:45'
// dayAndTime(759)     should return 'Sunday 12:39'
// dayAndTime(1236)    should return 'Sunday 20:36'
// dayAndTime(1447)    should return 'Monday 00:07'
// dayAndTime(7832)    should return 'Friday 10:32'
// dayAndTime(18876)   should return 'Saturday 02:36'
// dayAndTime(259180)  should return 'Thursday 23:40'
// dayAndTime(-349000) should return 'Tuesday 15:20'
function dayAndTime(n) {
    let date = new Date(2019,8,1,0,0,0);
    let d = new Date(date.getTime() + (n * 60 * 1000));

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let res = [d.getHours(), d.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":");

    return `${days[d.getDay()]} ${res}`;
}
console.log(dayAndTime(45));
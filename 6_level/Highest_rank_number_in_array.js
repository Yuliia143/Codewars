// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
function highestRank(arr) {
    let obj = {};
    arr.forEach(num => {
        obj[num] ? obj[num]++ : obj[num] = 1;
    });
    let frequency = [];
    let pos = Math.max(...Object.values(obj));
    Object.values(obj).map((item) => {
        if (item === pos) {
            let key = Object.keys(obj).find(key => obj[key] === pos);
            frequency.push(key);
            delete obj[key];
        }
    });
    return Math.max(...frequency);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
// highAndLow("1 2 3 4 5");  // return "5 1"
function highAndLow(numbers){
    var array = numbers
        .split(" ")
        .map(item=>parseInt(item));
    return Math.max(...array) + " " +Math.min(...array);
}
console.log(highAndLow("1 2 3 4 5"));
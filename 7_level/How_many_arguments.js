// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4
function args_count(count){
    return arguments.length;
}
console.log(args_count(1,2,4));
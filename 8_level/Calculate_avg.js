function find_average(array) {
    return array.reduce((sum,current)=>sum+current) / array.length;
}
console.log(find_average([1,2,5,7,9]));
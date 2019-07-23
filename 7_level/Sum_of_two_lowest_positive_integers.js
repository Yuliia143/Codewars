// [19, 5, 42, 2, 77], the output should be 7.
function sumTwoSmallestNumbers(numbers) {
    let pos;

    let  min1 = Math.min(...numbers);
    pos = numbers.indexOf(min1);
    numbers.splice(pos,1);

    let min2 = Math.min(...numbers);
    pos = numbers.indexOf(min2);
    numbers.splice(pos,1);

    return min1+min2;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
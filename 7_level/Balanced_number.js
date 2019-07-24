// The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
function balancedNum(number)
{
    var arr = number.toString().split('').map(Number);
    var l_sum = 0;
    var r_sum = 0;
    if (arr.length<3){
        return 'Balanced';
    }
    else {
        for (var i = 0; i < arr.length / 2 - 1; i++) {
            for (var j = arr.length - 1; j > arr.length / 2; j--) {
                r_sum += arr[j];
            }
            l_sum += arr[i];
        }
        r_sum /= i;
    }
    return l_sum === r_sum ? 'Balanced':'Not Balanced';
}
console.log(balancedNum(295591));
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
    numbers = numbers.toString().split(' ');
    let odd =[];
    let even= [];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]%2===0){
            even.push(numbers[i]);
        }
        else{
            odd.push(numbers[i]);
        }
    }
    let num = (even.length===1)?even[0]:odd[0];
    return numbers.indexOf(num)+1;
}
console.log(iqTest(1,2,1,1));
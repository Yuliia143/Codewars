// sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) --> 'product'
// Explaination
// The sum of the 3 highest numbers is 41 + 36 + 20 = 97
// The product of the lowest 3 numbers is 8 x 9 x 10 = 720
// The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns product

// Test.assertEquals(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), "sum");
// Test.assertEquals(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3), "product");
// Test.assertEquals(sumOrProduct([10, 20, 3, 30, 5, 4], 3), "same");
function sumOrProduct(array, n) {
    let sortArr = array.sort((a,b)=>a-b);
    let sum = sortArr.slice(-n).reduce((a,b)=>a+b);
    let prod = sortArr.slice(0,n).reduce((a,b)=>a*b);
    return sum==prod ? 'same' : sum<prod ? 'product':'sum';
}
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3));
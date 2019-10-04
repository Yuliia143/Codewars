// pyramid(0) => [ ]
// pyramid(1) => [  [1]  ]
// pyramid(2) => [  [1],  [1, 1]  ]
// pyramid(3) => [  [1],  [1, 1],  [1, 1, 1]  ]
function pyramid(n) {
    let array = [];
    array.length = n;
    for (let i = 0; i < array.length; i++) {
        array[i] = [];
        array[i].length = i + 1;
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = 1;
        }
    }
    return array;
}

console.log(pyramid(3));
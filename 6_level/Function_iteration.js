// var doubleIterator = createIterator(getDouble, 2); // This means, it runs *getDouble* twice
// doubleIterator(3) => 12
var createIterator = function (func,n) {
    return function(x) {
        for(i = 0; i < n; i++) {
            x = func(x);
        }
        return x;
    }
};
console.log(createIterator(3));
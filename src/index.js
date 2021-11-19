// 1 - Работа с простыми типами
function concat(left, right) {
    return left + right;
}
var myArray = [1, 2, 3];
var initialValue = 2;
console.log(myArray.reduce(function (accumulator, value) { return accumulator + value; }, initialValue));

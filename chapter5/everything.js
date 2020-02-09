function every(array, pred) {
    for (let element of array) {
        if (pred(element) == false) return false;
    }
    return true;
}

function every2(array, pred) {
    return !array.some(element => pred(element) == false);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
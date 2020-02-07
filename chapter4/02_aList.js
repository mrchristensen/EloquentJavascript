function arrayToList(nums) {
    let myList = null;
    for (i = nums.length - 1; i >= 0; i--) {
        myList = { value: nums[i], rest: myList };
    }
    return myList;
}

function listToArray(myList) {
    var nums = [];
    for (let node = myList; node; node = node.rest) {
        nums.push(node.value);
    }
    return nums;
}

function prepend(value, myList) {
    return { value, rest: myList };
}

function nth(myList, n) {
    if (n == 0) {
        return myList.value;
    } else {
        return nth(myList.rest, n - 1);
    }
}
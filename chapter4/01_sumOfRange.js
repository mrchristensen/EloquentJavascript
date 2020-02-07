function range(start, end, step) {
    var nums = [];

    if (step == null) {
        step = 1;
    }

    if (step > 0) {
        for (i = start; i <= end; i = i + step) {
            nums.push(i);
        }
    }
    if (step < 0) {
        for (i = start; i >= end; i += step) {
            nums.push(i);
        }
    }

    return nums;
}

function sum(nums) {
    var total = 0;
    for (i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
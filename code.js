function quicksort(array) {
    let stack = [{ left: 0, right: array.length - 1 }];
    while (stack.length > 0) {
        let { left, right } = stack.pop();
        if (left >= right) continue;
        let pivot = array[right];
        let partitionIndex = partition(array, left, right, pivot);
        stack.push({ left, right: partitionIndex - 1 });
        stack.push({ left: partitionIndex + 1, right });
    }
    return array;
}

function partition(array, left, right, pivot) {
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (array[i] < pivot) {
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
            partitionIndex++;
        }
    }
    [array[right], array[partitionIndex]] = [array[partitionIndex], array[right]];
    return partitionIndex;
}

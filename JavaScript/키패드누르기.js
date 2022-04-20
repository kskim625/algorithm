const getDistance = (arr1, arr2) => {
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}

function solution(numbers, hand) {
    const leftKeys = [1, 4, 7];
    const centerKeys = [2, 5, 8, 0];
    const rightKeys = [3, 6, 9];
    let leftHand = [3, 0], rightHand = [3, 0];
    let result = '';
    for (let i = 0; i < numbers.length; i++) {
        if (leftKeys.includes(numbers[i])) {
            leftHand = [leftKeys.indexOf(numbers[i]), 0];
            result += 'L';
        } else if (rightKeys.includes(numbers[i])) {
            rightHand = [rightKeys.indexOf(numbers[i]), 0];
            result += 'R';
        } else {
            const leftDistance = getDistance(leftHand, [centerKeys.indexOf(numbers[i]), 1]);
            const rightDistance = getDistance(rightHand, [centerKeys.indexOf(numbers[i]), 1]);
            if (leftDistance < rightDistance || (hand === 'left' && leftDistance === rightDistance)) {
                leftHand = [centerKeys.indexOf(numbers[i]), 1];
                result += 'L';
            } else if (leftDistance > rightDistance || (hand === 'right' && leftDistance === rightDistance)) {
                rightHand = [centerKeys.indexOf(numbers[i]), 1];
                result += 'R';
            }
        }
    }
    return result;
}

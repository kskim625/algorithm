//unsolved
const getSum = (sticker, i, sum) => {
    sum += sticker[i];
    sticker[i] = 0;
    if (i === 0) sticker[sticker.length - 1] = 0;
    else sticker[i - 1] = 0;
    if (i === sticker.length - 1) sticker[0] = 0;
    else sticker[i + 1] = 0;
    if (sticker.filter(s => s === 0).length === sticker.length) return sum;
    let answer, tempAnswer;
    for (let j = 0; j < sticker.length; j++) {
        if (sticker[j] !== 0) tempAnswer = Math.max(sum, getSum(sticker.slice(), j, sum));
        if (Number.isInteger(tempAnswer)) answer = tempAnswer;
    }
    return answer;
}

function solution(sticker) {
    let answer = 0;
    for (let i = 0; i < sticker.length; i++) answer = Math.max(answer, getSum(sticker.slice(), i, 0));
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
//console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
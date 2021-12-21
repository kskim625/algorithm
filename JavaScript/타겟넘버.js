const getAnswer = (numbers, target, sum, count) => {
    if (count === numbers.length) {
        if (sum === target) return 1;
        else return 0;
    }
    let answer = 0;
    answer += getAnswer(numbers, target, sum + numbers[count], count + 1);
    answer += getAnswer(numbers, target, sum + -1 * numbers[count], count + 1);
    return answer;
}

function solution(numbers, target) {
    return getAnswer(numbers, target, 0, 0);
}

console.log(solution([1, 1, 1, 1, 1], 3));
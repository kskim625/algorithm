//unsolved
const getAnswer = (numbers, signs, answerList, index) => {
    numbers[index] = signs[index] === '+' ? numbers[index] + numbers[index + 1] : numbers[index] - numbers[index + 1];
    numbers.splice(index + 1, 1);
    signs.splice(index, 1);
    if (numbers.length === 1) {
        const answer = numbers[0];
        if (!answerList.includes(answer)) {
            answerList.push(answer);
        }
        return;
    }

    for (let i = 0; i < signs.length; i++) {
        const s = JSON.parse(JSON.stringify(signs));
        const n = JSON.parse(JSON.stringify(numbers));
        getAnswer(n, s, answerList, i);
    }
}

// function solution(arr) {
//     let numbers = [], signs = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == Number(arr[i])) {
//             numbers.push(Number(arr[i]));
//         } else {
//             signs.push(arr[i]);
//         }
//     }
//     const answerList = [];
//     for (let j = 0; j < signs.length; j++) {
//         getAnswer(JSON.parse(JSON.stringify(numbers)), JSON.parse(JSON.stringify(signs)), answerList, j);
//     }
//     return Math.max.apply(null, answerList);
// }

function solution(arr) {
    let numbers = [], signs = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == Number(arr[i])) {
            numbers.push(Number(arr[i]));
        } else {
            signs.push(arr[i]);
        }
    }
    let start = false;
    for (let j = signs.length - 1; j >= 0; j--) {
        if (signs[j] === '-') start = true;
        if (!start) continue;
        if (signs[j] === '-') {
            numbers[j] -= numbers[j + 1];
        } else {
            numbers[j] += numbers[j + 1];
        }
        numbers[j + 1] = 0;
    }
    let answer = 0;
    for (let k = 0; k < numbers.length; k++) {
        answer += numbers[k];
    }
    return answer;
}

console.log(solution(["1", "-", "3", "+", "5", "-", "8"]));
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]));
const getAnswer = (n, left, right, str) => {
    if (n === left && n === right) {
        return 1;
    }
    
    let answer = 0;
    if (left < n) {
        answer += getAnswer(n, left + 1, right, str + '(');
    }
    if (right < left) {
        answer += getAnswer(n, left, right + 1, str + ')');
    }
    return answer;
}

function solution(n) {
    return getAnswer(n, 1, 0, '(');
}

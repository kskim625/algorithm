function solution(n) {
    let answer = '';
    let remainder;
    while (n >= 1) {
        remainder = n % 3;
        n = Math.floor(n / 3);
        if (remainder === 1) {
            answer = '1' + answer;
        } else if (remainder === 2) {
            answer = '2' + answer;
        } else {
            answer = '4' + answer;
            n -= 1;
        }
    }
    return answer;
}

console.log(solution(500000000000))
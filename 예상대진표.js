function solution(n, a, b) {
    let answer = 1;
    while (true) {
        if (Math.ceil(a / 2) === Math.ceil(b / 2)) return answer;
        if (a % 2 === 0) a /= 2;
        else a = Math.floor(a / 2 + 1);
        if (b % 2 === 0) b /= 2;
        else b = Math.floor(b / 2 + 1);
        answer++;
    }
}

console.log(solution(64, 4, 5));
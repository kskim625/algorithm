function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0, add = i, preventError = 0;
        while (sum < n && preventError < 100) {
            sum += add;
            add += 1;
            preventError += 1;
        }
        if (sum === n) answer += 1;
    }
    return answer;
}

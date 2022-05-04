function solution(n) {
    let answer = 0, idx = n;
    while (idx > 0) {
        if (idx % 2 === 0) {
            idx /= 2;
        } else {
            answer += 1;
            idx -= 1;
        }
    }
    return answer;
}

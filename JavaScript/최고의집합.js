function solution(n, s) {
    if (s < n) return [-1];

    const answer = [];
    const division = Math.floor(s / n);
    const remainder = s % n;
    
    for (let i = 0; i < n - remainder; i++) answer.push(division);
    while (answer.length !== n) answer.push(division + 1);
    return answer;
}

function solution(s) {
    let answer = 1, temp;
    for (let i = 0; i < s.length; i++) {
        temp = 1;
        for (let j = 1; j <= Math.min(i, s.length - i - 1); j++) {
            if (s[i - j] === s[i + j]) temp += 2;
            else break;
        }
        if (temp > answer) answer = temp;
        if (i > 0 && s[i] === s[i - 1]) {
            temp = 2;
            for (let l = 1; l <= Math.min(i - 1, s.length - i); l++) {
                if (s[i - l - 1] === s[i + l]) temp += 2;
                else break;
            }
            if (temp > answer) answer = temp;
        }
    }
    return answer;
}

console.log(solution("aaaa"));
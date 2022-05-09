function solution(n) {
    let str = '';
    while (n > 2) {
        str = n % 3 + str;
        n = Math.floor(n / 3);
    }
    let reverse = (n + str).split('').reverse().join('');
    let q = 0, answer = 0;
    for (let i = reverse.length - 1; i >= 0; i--) {
        answer += 3 ** q * reverse[i];
        q += 1;
    }
    return answer;
}

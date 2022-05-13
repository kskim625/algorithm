function solution(n, k) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        if (k === 1) break;
        let sFactorial = 1;
        for (let j = 2; j < n - i; j++) {
            sFactorial *= j;
        }
        let count = 0;
        let num = 1;
        while (count < Math.ceil(k / sFactorial)) {
            if (!answer.includes(num)) {
                count += 1;
            }
            num += 1;
        }
        answer.push(num - 1);
        k = k % sFactorial === 0 ? sFactorial : k % sFactorial;
    }
    for (let x = 1; x <= n; x++) {
        if (!answer.includes(x)) {
            answer.push(x);
        }
    }
    return answer;
}

console.log(solution(3, 1));
console.log('---------------------')
console.log(solution(3, 2));
console.log('---------------------')
console.log(solution(3, 3));
console.log('---------------------')
console.log(solution(3, 4));
console.log('---------------------')
console.log(solution(3, 5));
console.log('---------------------')
console.log(solution(3, 6));
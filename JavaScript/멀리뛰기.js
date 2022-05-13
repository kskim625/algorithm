function solution(n) {
    let answerList = new Array(n);
    answerList[0] = BigInt(1);
    answerList[1] = BigInt(2);
    for (let i = 2; i < n; i++) {
        answerList[i] = BigInt(answerList[i - 2]) + BigInt(answerList[i - 1]);
    }
    return Number(answerList[n - 1] % BigInt(1234567));
}

console.log(solution(5));
const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer += 1;
    }
    return answer;
}

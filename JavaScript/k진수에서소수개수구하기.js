const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    const num = n.toString(k);
    let answer = 0, str = '';
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '0') {
            str += num[i];
        } else {
            if (isPrime(Number(str))) {
                answer += 1;
            }
            str = '';
        }
    }
    return isPrime(Number(str)) ? answer + 1 : answer;
}

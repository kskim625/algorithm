const binary = (num) => {
    let result = '';
    while (num > 1) {
        result += String(num % 2);
        num = Math.floor(num / 2);
    }
    return '1' + result;
}

function solution(s) {
    let count = 0, zeroes = 0;
    while (s !== '1') {
        let ones = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') zeroes += 1;
            else ones += 1;
        }
        s = binary(ones);
        count += 1;
    }
    return [count, zeroes];
}

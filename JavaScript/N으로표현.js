function solution(N, number) {
    const answer = calc(N, number, N, 1);
    return answer < 9 ? answer : -1;
}

function calc(N, number, current, count) {
    if (current === number || count > 8) return count;
    
    if (Number.isInteger(current)) {
        let c = 9, n = '';
        for (let i = 1; i < 6; i++) {
            n += String(N);
            c = Math.min(c, calc(N, number, Number(current + Number(n)), count + i));
            c = Math.min(c, calc(N, number, Number(current - Number(n)), count + i));
            c = Math.min(c, calc(N, number, Number(Number(n) - current), count + i));
            c = Math.min(c, calc(N, number, Number(current * Number(n)), count + i));
            c = Math.min(c, calc(N, number, Number(current / Number(n)), count + i));
            c = Math.min(c, calc(N, number, Number(Number(n) / current), count + i));
            c = Math.min(c, calc(N, number, Number(current + n), count + i));
        }
        return c;
    } else return 9;
}

console.log(solution(5, 12));
console.log(solution(2, 11));
console.log(solution(8, 5800));
console.log(solution(5, 31168));
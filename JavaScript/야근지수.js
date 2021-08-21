//효율성 통과x

function solution(n, works) {
    const r = (acc, curr) => acc + curr;
    const sum = works.reduce(r);
    if (sum <= n) return 0;
    let answer = 0;
    for (let i = 0; i < n; i++) works[works.indexOf(Math.max(...works))]--;
    for (let j = 0; j < works.length; j++) answer += works[j]**2;
    return answer;
}

console.log(solution(4, [4, 3, 3]));
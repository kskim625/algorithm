//효율성 X

function solution(n, cores) {
    let works = new Array(cores.length).fill(0);
    while (n > 0) {
        let currentCore;
        for (let i = 0; i < works.length; i++) {
            if (n > 0 && works[i] === 0) {
                works[i] = 1;
                n -= 1;
                currentCore = i + 1;
            } else if (works[i] !== 0) {
                works[i] += 1;
            }
            if (works[i] === cores[i]) {
                works[i] = 0;
            }
        }
        if (n === 0) {
            return currentCore;
        }
    }
}

console.log(solution(6, [3, 1, 2]));

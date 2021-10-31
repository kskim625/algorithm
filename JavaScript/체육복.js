function solution(n, lost, reserve) {
    for (let i = 1; i < n + 1; i++) {
        if (lost.includes(i) && reserve.includes(i)) {
            lost.splice(lost.indexOf(i), 1);
            reserve.splice(reserve.indexOf(i), 1);
        }
    }
    for (let j = 1; j < n + 1; j++) {
        if (lost.includes(j)) {
            if (reserve.includes(j - 1)) {
                lost.splice(lost.indexOf(j), 1);
                reserve.splice(reserve.indexOf(j - 1), 1);
            } else if (reserve.includes(j + 1)) {
                lost.splice(lost.indexOf(j), 1);
                reserve.splice(reserve.indexOf(j + 1), 1);
            }
        }
    }
    return n - lost.length;
}

console.log(solution(5, [1, 5], [2]));
// console.log(solution(5, [2, 4], [4]));
// console.log(solution(3, [3], [1]));
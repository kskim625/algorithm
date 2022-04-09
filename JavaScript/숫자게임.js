function solution(A, B) {
    A.sort((a, b) => { return a - b });
    B.sort((a, b) => { return a - b });
    let adx = 0;
    for (let bdx = 0; bdx < A.length; bdx++) {
        if (B[bdx] > A[adx]) {
            adx += 1;
        }
    }
    return adx;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
function solution(rows, columns, queries) {
    var answer = [];

    let matrix = [], num = 1;
    for (let i = 0; i < rows; i++) {
        let c = [];
        for (let j = 0; j < columns; j++) {
            c.push(num);
            num++;
        }
        matrix.push(c);
    }

    let sc, sr, ec, er;
    for (let k = 0; k < queries.length; k++) {
        sc = queries[k][0]-1;
        sr = queries[k][1]-1;
        ec = queries[k][2]-1;
        er = queries[k][3]-1;
        let current = matrix[sc][sr];
        let next;
        answer.push(current);
        for (let a = sr; a < er; a++) {
            next = matrix[sc][a+1];
            matrix[sc][a+1] = current;
            current = next;
            if (next < answer[answer.length-1]) answer[answer.length-1] = next;
        }
        for (let b = sc; b < ec; b++) {
            next = matrix[b+1][er];
            matrix[b+1][er] = current;
            current = next;
            if (next < answer[answer.length-1]) answer[answer.length-1] = next;
        }
        for (let c = er; c > sr; c--) {
            next = matrix[ec][c-1];
            matrix[ec][c-1] = current;
            current = next;
            if (next < answer[answer.length-1]) answer[answer.length-1] = next;
        }
        for (let d = ec; d > sc; d--) {
            next = matrix[d-1][sr];
            matrix[d-1][sr] = current;
            current = next;
            if (next < answer[answer.length-1]) answer[answer.length-1] = next;
        }
    }
    return answer;
}

console.log(solution(6, 6, [[2,2,5,4], [3,3,6,6], [5,1,6,3]]));
console.log(solution(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));
console.log(solution(100, 97, [[1,1,100,97]]));
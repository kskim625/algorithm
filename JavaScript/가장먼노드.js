function solution(n, edge) {
    let edges = {};
    for (let a = 0; a < n; a++) edges[a+1] = [];
    for (let i = 0; i < edge.length; i++) {
        edges[edge[i][0]].push(edge[i][1] - 1);
        edges[edge[i][1]].push(edge[i][0] - 1);
    }
    let distances = [], stack = [0];
    for (let j = 0; j < n; j++) distances.push(n);
    distances[0] = 0;
    while (stack.length !== 0) {
        let k = stack.pop();
        let currentDistance = distances[k];
        for (let l = 0; l < edges[k + 1].length; l++) {
            let nextNode = edges[k + 1][l];
            if (currentDistance + 1 < distances[nextNode]) {
                stack.push(nextNode);
                distances[nextNode] = currentDistance + 1;
            }
        }
    }

    const maxNum = Math.max.apply(null, distances);
    let count = 0;
    distances.forEach(d => { if (d === maxNum) count++; });
    return count;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
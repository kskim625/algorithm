function solution(n, s, a, b, fares) {
    let ways = {}, totalCost = 0;
    for (let i = 0; i < n; i++) ways[i] = [];
    for (let j = 0; j < fares.length; j++) {
        ways[fares[j][0] - 1].push([fares[j][1] - 1, fares[j][2]]);
        ways[fares[j][1] - 1].push([fares[j][0] - 1, fares[j][2]]);
        totalCost += fares[j][2];
    }
    let answer = totalCost;
    let distances = [];
    for (let l = 0; l < n; l++) {
        let distance = [];
        distance.length = n;
        distance.fill(totalCost);
        let stack = [[l, 0]], current;
        for (let k = 0; k < ways[l].length; k++) stack.push([l, 0]);
        while (stack.length !== 0) {
            current = stack.pop();
            const d = distance[current[0]];
            distance[current[0]] = Math.min(distance[Number(current[0])], Number(current[1]));
            if (d !== distance[current[0]] && current[1] < totalCost) {
                for (let m = 0; m < ways[current[0]].length; m++) {
                    stack.push([ways[current[0]][m][0], ways[current[0]][m][1] + distance[Number(current[0])]]);
                }
            }
        }
        distances.push(distance);
    }
    for (let c = 0; c < distances.length; c++) {
        answer = Math.min(answer, distances[s - 1][c] + distances[c][a - 1] + distances[c][b - 1]);
    }
    return answer;
}

console.log(solution(6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]))
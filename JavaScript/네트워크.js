function dfs(computers, idx, visited) {
    visited[idx] = true;
    for (let i = 0; i < computers[idx].length; i++) {
        if (computers[idx][i] === 1 && !visited[i]) dfs(computers, i, visited);
    }
}

function solution(n, computers) {
    let answer = 0, visited = [];
    for (let i = 0; i < n; i++) visited[i] = false;
    for (let j = 0; j < n; j++) {
        if (!visited[j]) {
            dfs(computers, j, visited);
            answer++;
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))
console.log(solution(4, [[1, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 1, 1]]))
console.log(solution(4, [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]]))
console.log(solution(4, [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]))
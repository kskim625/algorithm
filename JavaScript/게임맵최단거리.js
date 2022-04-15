function solution(maps) {
    const answerList = [];
    const stack = [[0, 0, 1]];
    while (stack.length > 0) {
        const [i, j, moves] = stack.shift();
        if (i + 1 === maps.length && j + 1 === maps[i].length) {
            return moves;
        }
        if (i < maps.length - 1 && (maps[i + 1][j] === 1 || maps[i + 1][j] > moves + 1)) {
            stack.push([i + 1, j, moves + 1]);
            maps[i + 1][j] = moves;
        }
        if (j < maps[i].length - 1 && (maps[i][j + 1] === 1 || maps[i][j + 1] > moves + 1)) {
            stack.push([i, j + 1, moves + 1]);
            maps[i][j + 1] = moves;
        }
        if (i > 0 && (maps[i - 1][j] === 1 || maps[i - 1][j] > moves + 1)) {
            stack.push([i - 1, j, moves + 1]);
            maps[i - 1][j] = moves;
        }
        if (j > 0 && (maps[i][j - 1] === 1 || maps[i][j - 1] > moves + 1)) {
            stack.push([i, j - 1, moves + 1]);
            maps[i][j - 1] = moves;
        }
    }
    return -1;
}

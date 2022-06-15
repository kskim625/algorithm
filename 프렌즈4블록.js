const modifyBoard = (m, n, tempBoard) => {
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (tempBoard[j][i] === '0') {
                let char = '0', idx = j;
                while (idx >= 0 && char === '0')  {
                    if (tempBoard[idx][i] !== '0') {
                        char = tempBoard[idx][i];
                        break;
                    }
                    idx -= 1;
                }
                if (char !== '0') {
                    tempBoard[idx] = tempBoard[idx].substring(0, i) + '0' + tempBoard[idx].substring(i + 1, n);
                    tempBoard[j] = tempBoard[j].substring(0, i) + char + tempBoard[j].substring(i + 1, n);
                }
            }
        }
    }
    return tempBoard;
}

const checkIncludes = (removed, i, j) => {
    return removed.some((r) => {
        if (r[0] === i && r[1] === j) return true;
        return false;
    });
}

const checkBoard = (m, n, board) => {
    const removed = [];
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (board[i][j] !== '0' && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 1][j + 1]) {
                if (!checkIncludes(removed, i, j)) removed.push([i, j]);
                if (!checkIncludes(removed, i + 1, j)) removed.push([i + 1, j]);
                if (!checkIncludes(removed, i, j + 1)) removed.push([i, j + 1]);
                if (!checkIncludes(removed, i + 1, j + 1)) removed.push([i + 1, j + 1]);
            }
        }
    }
    return removed
}

function solution(m, n, board) {
    let answer = 0;
    while (true) {
        let tempBoard = board.slice();
        const removed = checkBoard(m, n, tempBoard);
        if (removed.length === 0) break;
        else answer += removed.length;
        while (removed.length !== 0) {
            const index = removed.shift();
            tempBoard[index[0]] = tempBoard[index[0]].substring(0, index[1]) + '0' + tempBoard[index[0]].substring(index[1] + 1, n);
        }
        board = modifyBoard(m, n, tempBoard);
    }
    return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));
//효율성 실패

const getAnswer = (board, i, j, len) => {
    if (i + 1 >= board.length || board[i + 1][j] === 0) return len;
    if (j + 1 >= board[i].length || board[i][j + 1] === 0) return len;
    if (board[i + 1][j + 1] === 0) return len;
    let answer = 10e9;
    answer = Math.min(answer, getAnswer(board, i, j + 1, len + 1));
    answer = Math.min(answer, getAnswer(board, i + 1, j, len + 1));
    answer = Math.min(answer, getAnswer(board, i + 1, j + 1, len + 1));
    return answer;
}

function solution(board) {
    let answer = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) answer = Math.max(answer, getAnswer(board, i, j, 1));
        }
    }
    return answer ** 2;
}

console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]));
console.log(solution([[0,0,1,1],[1,1,1,1]]));
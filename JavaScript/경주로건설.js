const getCost = (board, costBoard, i, j, cost, vertical, horizontal) => {
    board[i][j] = 1;
    costBoard[i][j] = cost;
    const destination = board.length - 1;
    if (i === destination && j === destination) {
        return cost;
    }
    let answer = 10e9;
    if (j > 0 && board[i][j - 1] !== 1) {
        const additionalCost = horizontal ? 600 : 100;
        if (costBoard[i][j - 1] + 250 >= cost + additionalCost) {
            answer = Math.min(answer, getCost(JSON.parse(JSON.stringify(board)), costBoard, i, j - 1, cost + additionalCost, true, false));
        }
    }
    if (j < destination && board[i][j + 1] !== 1) {
        const additionalCost = horizontal ? 600 : 100;
        if (costBoard[i][j + 1] + 250 >= cost + additionalCost) {
            answer = Math.min(answer, getCost(JSON.parse(JSON.stringify(board)), costBoard, i, j + 1, cost + additionalCost, true, false));
        }
    }
    if (i > 0 && board[i - 1][j] !== 1) {
        const additionalCost = vertical ? 600 : 100;
        if (costBoard[i - 1][j] + 250 >= cost + additionalCost) {
            answer = Math.min(answer, getCost(JSON.parse(JSON.stringify(board)), costBoard, i - 1, j, cost + additionalCost, false, true));
        }
    }
    if (i < destination && board[i + 1][j] !== 1) {
        const additionalCost = vertical ? 600 : 100;
        if (costBoard[i + 1][j] + 250 >= cost + additionalCost) {
            answer = Math.min(answer, getCost(JSON.parse(JSON.stringify(board)), costBoard, i + 1, j, cost + additionalCost, false, true));
        }
    }
    return answer;
}

function solution(board) {
    let newBoard = JSON.parse(JSON.stringify(board));
    let costBoard = new Array(board.length);
    for (let i = 0; i < board.length; i++) {
        const costs = new Array(board.length).fill(10e9);
        costBoard[i] = costs;
    }
    return getCost(newBoard, costBoard, 0, 0, 0, false, false);
}

//console.log(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
console.log(solution([
    [0, 0, 0, 0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 0], 
    [0, 0, 0, 1, 0, 0, 0, 1], 
    [0, 0, 1, 0, 0, 0, 1, 0], 
    [0, 1, 0, 0, 0, 1, 0, 0], 
    [1, 0, 0, 0, 0, 0, 0, 0]
]));
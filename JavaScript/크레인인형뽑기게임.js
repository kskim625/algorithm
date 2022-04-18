function solution(board, moves) {
    const basket = [];
    let answer = 0;
    for (let i = 0; i < moves.length; i++) {
        const loc = moves[i] - 1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][loc] !== 0) {
                let character = board[j][loc];
                board[j][loc] = 0;
                if (basket.length > 0 && basket[basket.length - 1] === character) {
                    basket.pop();
                    answer += 2;
                }
                else basket.push(character);
                break;
            }
        }
    }
    return answer;
}

function checkPositions(stage, a, b) {
    if (b[1] - a[1] === 0) {
        if (stage[(a[0] + b[0]) / 2][a[1]] === 'X') return true;
    } else if (b[0] - a[0] === 0) {
        if (stage[b[0]][(a[1] + b[1]) / 2] === 'X') return true;
    } else {
        if (stage[a[0]][b[1]] === 'X' && stage[b[0]][a[1]] === 'X') return true;
    }
    return false;
}

function checkStage(stage) {
    const pos = [];
    for (let i = 0; i < stage.length; i++) {
        for (let j = 0; j < stage[i].length; j++) {
            if (stage[i][j] === 'P') pos.push([i, j]);
        }
    }
    for (let a = 0; a < pos.length - 1; a++) {
        for (let b = a + 1; b < pos.length; b++) {
            let m = Math.abs(pos[a][0] - pos[b][0]) + Math.abs(pos[a][1] - pos[b][1]);
            if (m === 1) return false;
            if (m === 2) if (!checkPositions(stage, pos[a], pos[b])) return false;
        }
    }
    return true;
}

function solution(places) {
    const answer = [];
    places.forEach((p) => {
        if (checkStage(p)) answer.push(1);
        else answer.push(0);
    })
    return answer;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))
//console.log(solution([["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))
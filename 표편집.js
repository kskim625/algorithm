//unsolved

function solution(n, k, cmd) {
    let answer = new Array(n);
    let linkedList = new Array(n);
    for (let x = 0; x < linkedList.length; x++) {
        linkedList[x] = [x - 1, x + 1];
    }
    const stack = [];
    let arrLen = n;
    for (let i = 0; i < cmd.length; i++) {
        if (cmd[i][0] === 'D') {
            for (let _ = 0; _ < Number(cmd[i].split(' ')[1]); _++) {
                k = linkedList[k][1];
            }
        } else if (cmd[i][0] === 'U') {
            for (let _ = 0; _ < Number(cmd[i].split(' ')[1]); _++) {
                k = linkedList[k][0];
            }
        } else if (cmd[i][0] === 'C') {
            stack.push(k);
            if (linkedList[k][0] >= 0) linkedList[linkedList[k][0]][1] = k + 1;
            if (linkedList[k][1] < n) linkedList[linkedList[k][1]][0] = k - 1;
            if (linkedList[k][0] >= 0 && linkedList[k][1] >= arrLen) k = linkedList[k][0];
            else if (linkedList[k][1] < n) k = linkedList[k][1];
        } else if (cmd[i][0] === 'Z') {
            const num = stack.pop();
            if (linkedList[num][0] >= 0) linkedList[linkedList[num][0]][1] = num;
            if (linkedList[num][1] < n) linkedList[linkedList[num][1]][0] = num;
            arrLen += 1;
        }
    }
    for (let j = 0; j < stack.length; j++) {
        answer[stack[j]] = 'X';
    }
    for (let l = 0; l < answer.length; l++) {
        if (!answer[l]) answer[l] = 'O';
    }
    return answer.join('');
}


console.log(solution(8, 5, ["D 2", "C", "C", "Z", "Z", "C", "C", "Z", "Z"]))
//console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]))
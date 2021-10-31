//unsolved

function solution(n, k, cmd) {
    let answer = '', list = [], num;
    const listTemp = [];
    for (let a = 0; a < n; a++) list.push(a);
    for (let i = 0; i < cmd.length; i++) {
        num = Number(cmd[i].split(' ')[1]);
        if (cmd[i][0] === 'U') k -= num;
        else if (cmd[i][0] === 'D') k += num;
        else if (cmd[i][0] === 'C') {
            listTemp.push(list.slice());
            list.splice(k, 1);
        } else if (cmd[i][0] === 'Z') {
            list = listTemp[listTemp.length - 1];
            listTemp.pop();
        }
    }
    for (let j = 0; j < n; j++) {
        if (!list.includes(j)) answer += 'X';
        else answer += 'O';
    }
    return answer;
}


console.log(solution(30, 2, ["D 2","C","U 13","C","D 4","C","U 2"]))
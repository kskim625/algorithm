const getAnswer = (name, init, idx, answer, visited) => {
    visited.push(idx);
    const alphabet1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const alphabet2 = [null, 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N'];
    if (alphabet1.includes(name[idx])) {
        answer += alphabet1.indexOf(name[idx]);
        init = init.substring(0, idx) + name[idx] + init.substring(idx + 1, init.length);
    } else {
        answer += alphabet2.indexOf(name[idx]);
        init = init.substring(0, idx) + name[idx] + init.substring(idx + 1, init.length);
    }
    if (name === init) return answer;

    let count = 10e9;
    if (visited.filter(v => v === idx - 1).length < 2) {
        if (idx - 1 < 0) {
            if (visited.filter(v => v === name.length - 1).length < 2) count = Math.min(count, getAnswer(name, init, name.length - 1, answer + 1, visited.slice()));
        } else count = Math.min(count, getAnswer(name, init, idx - 1, answer + 1, visited.slice()));
    }
    if (visited.filter(v => v === idx + 1).length < 2) {
        if (idx + 1 > name.length - 1) {
            if (visited.filter(v => v === 0).length < 2) count = Math.min(count, getAnswer(name, init, 0, answer + 1, visited.slice()));
        } else count = Math.min(count, getAnswer(name, init, idx + 1, answer + 1, visited.slice()));
    }
    return count;
}

function solution(name) {
    let init = '';
    for (let i = 0; i < name.length; i++) init += 'A';
    return getAnswer(name, init, 0, 0, []);
}

//console.log(solution('JEROEN'));
//console.log(solution('JAN'));
//console.log(solution('ABABAAAAABA'));
//console.log(solution('BBBAAAB'));
console.log(solution('JAO'));
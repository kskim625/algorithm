//시간 초과

const moveStr = (s) => {
    let str = s;
    for (let j = 0; j < s.length - 2; j++) {
        if (s.substring(j, j + 3) === '110') {
            let tempStr = s.substring(0, j) + s.substring(j + 3, s.length);
            for (let k = 0; k < tempStr.length + 1; k++) {
                let newStr = tempStr.substring(0, k) + '110' + tempStr.substring(k, tempStr.length);
                if (newStr < str) {
                    str = newStr;
                }
            }
        }
    }
    return str;
}

function solution(s) {
    const answer = [];
    for (let i = 0; i < s.length; i++) {
        let str = s[i], newStr = moveStr(s[i]);
        while (str !== newStr) {
            str = newStr;
            newStr = moveStr(newStr);
        }
        answer.push(str);
    }
    return answer;
}

console.log(solution(["1110","100111100","0111111010"]));

//console.log(solution(["100111100"]));

// 0110110111
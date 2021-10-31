function solution(new_id) {
    let temp = '', answer = '';
    new_id = new_id.toLowerCase();
    for (let i = 0; i < new_id.length; i++)
        if (new_id[i].match(/[a-z0-9\.\-\_]/g)) temp += new_id[i];
    let ifPeriod = false;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '.') {
            if (!ifPeriod) {
                answer += '.';
                ifPeriod = true;
            }
        } else {
            answer += temp[i];
            ifPeriod = false;
        }
    }
    if (answer[0] === '.') answer = answer.substring(1, answer.length);
    if (answer[answer.length - 1] === '.') answer = answer.substring(0, answer.length - 1);
    if (answer.length === 0) answer = 'a';
    if (answer.length > 15) answer = answer.substring(0, 15);
    if (answer[answer.length - 1] === '.') answer = answer.substring(0, answer.length - 1);
    if (answer.length < 3) {
        const add = answer[answer.length - 1];
        while (answer.length !== 3) {
            answer += add;
        }
    }
    return answer;
}

//console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution(''));
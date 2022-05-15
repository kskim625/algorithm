function solution(s) {
    const answerList = [s];
    for (let i = Math.floor(s.length / 2); i > 0; i--) {
        let j = 0;
        let newS = '';
        let remainder = '';
        while (j + i * 2 <= s.length) {
            let count = 1;
            let firstStr = s.substr(j, i);
            let secondStr = s.substr(j + i, i);
            while (firstStr === secondStr) {
                count += 1;
                j += i;
                firstStr = s.substr(j, i);
                secondStr = s.substr(j + i, i);
            }
            if (count > 1) {
                newS += remainder + String(count) + firstStr;
                remainder = '';
                j += i;
            } else {
                remainder += s.substr(j, i);
                j += i;
            }
        }
        if (newS !== '' && (newS + remainder + s.substr(j, s.length)).length < answerList[answerList.length - 1].length) {
            answerList.push(newS + remainder + s.substr(j, s.length));
        }
    }
    return answerList[answerList.length - 1].length;
}

console.log(solution("aabbaccc"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
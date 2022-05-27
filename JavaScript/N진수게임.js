function solution(n, t, m, p) {
    const answerList = [];
    let num = 0;
    while (answerList.length < t * m) {
        const str = num.toString(n).toUpperCase();
        for (let i = 0; i < str.length; i++) {
            answerList.push(str[i]);
        }
        num += 1;
    }
    let answer = '';
    let order = 0;
    for (let j = 0; j < answerList.length; j++) {
        order += 1;
        if (answer.length === t) {
            break;
        }
        if (order === p) {
            answer += answerList[j];
        }
        if (order === m) {
            order = 0;
        }
    }
    return answer;
}

function check(scores, scoreList, countList, i) {
    const checkList = [];
    scores.forEach(s => { checkList.push(s[i]); });
    if (checkList[i] === Math.max.apply(null, checkList) || checkList[i] === Math.min.apply(null, checkList)) {
        if (checkList.filter(element => checkList[i] === element).length !== 1) {
            scoreList[i] += checkList[i];
            countList[i]++;
        }
    } else {
        scoreList[i] += checkList[i];
        countList[i]++;
    }
}

function solution(scores) {
    let answer = '';
    let scoreList = [], countList = [];
    for (let l = 0; l < scores.length; l++) {
        scoreList.push(0);
        countList.push(0);
    }
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores[i].length; j++) {
            if (i === j) {
                check(scores, scoreList, countList, i);
            } else {
                scoreList[j] += scores[i][j];
                countList[j]++;
            }
        }
    }
    for (let k = 0; k < scoreList.length; k++) {
        scoreList[k] /= countList[k];
        if (scoreList[k] < 50) answer += 'F';
        else if (scoreList[k] < 70) answer += 'D';
        else if (scoreList[k] < 80) answer += 'C';
        else if (scoreList[k] < 90) answer += 'B';
        else answer += 'A';
    }
    return answer;
}

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]));
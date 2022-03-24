function solution(s) {
    const answer = [];
    const arr = s.split('},');
    let sortedArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const content = arr[i].replace(/[\{\}]/gi, '').split(',');
        sortedArr[content.length - 1] = content;
    }
    for (let j = 0; j < sortedArr.length; j++) {
        for (let k = 0; k < sortedArr[j].length; k++) {
            if (!answer.includes(Number(sortedArr[j][k]))) {
                answer.push(Number(sortedArr[j][k]));
            }
        }
    }
    return answer;
}

//console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
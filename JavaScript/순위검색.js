function solution(info, query) {
    for (let i = 0; i < info.length; i++) {
        info[i] = info[i].split(' ');
    }

    const answer = [];
    query.forEach((q) => {
        let match = 0, idx = q.length - 1;
        while (q[idx] !== ' ') idx -= 1;
        q = q.substring(0, idx) + ' and ' + q.substring(idx + 1, q.length);
        const thisQuery = q.split(' and ');
        info.forEach((thisInfo) => {
            for (let j = 0; j < thisInfo.length; j++) {
                if (j < 4 && (thisQuery[j] === '-' || thisInfo[j] === thisQuery[j])) continue;
                else if (j === 4 && Number(thisInfo[j]) >= Number(thisQuery[j])) match += 1;
                else break;
            }
        });
        answer.push(match);
    });
    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));
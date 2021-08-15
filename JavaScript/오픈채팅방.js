function solution(record) {
    var answer = [];

    let ids = {};
    for (let i = 0; i < record.length; i++) {
        let rec = record[i].split(' ');
        if (rec[0] === 'Enter' || rec[0] === 'Change') ids[rec[1]] = rec[2];
    }
    
    for (let j = 0; j < record.length; j++) {
        let rec = record[j].split(' ');
        if (rec[0] === 'Enter') answer.push(ids[rec[1]] + '님이 들어왔습니다.');
        else if (rec[0] === 'Leave') answer.push(ids[rec[1]] + '님이 나갔습니다.');       
    }

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));

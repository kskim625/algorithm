function solution(s) {
    let strlist = s.toLowerCase().split(' ');
    let answerlist = [];
    
    for (let i = 0; i < strlist.length; i++) {
        if (strlist[i] !== '') {
            if (isNaN(strlist[i][0])) answerlist.push(strlist[i][0].toUpperCase() + strlist[i].substring(1, strlist[i].length));
            else answerlist.push(strlist[i]);
        } else answerlist.push(strlist[i]);
    }
    let answer = answerlist.join(' ');
    return answer;
}

console.log(solution("3people    3UnF3ollowed me"));
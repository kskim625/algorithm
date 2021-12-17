function solution(msg) {
    const answer = [];
    const dictionary = [null,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let i = 0, word;
    while (i < msg.length) {
        let idx = i;
        word = msg[i];
        while (idx < msg.length - 1 && dictionary.includes(word)) {
            idx += 1;
            word += msg[idx];
        }
        if (word.length + i === msg.length && dictionary.includes(word)) break;
        let currentWord = word.substring(0, word.length - 1);
        if (currentWord.length > 0) answer.push(dictionary.indexOf(currentWord));
        dictionary.push(word);
        if (word.length > 2) i += word.length - 2;
        i += 1;
    }
    answer.push(dictionary.indexOf(word));
    return answer;
}

console.log(solution('KAKAO'));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
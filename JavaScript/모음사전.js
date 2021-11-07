function solution(word) {
    let answer = 1;
    let currentWord = 'A';
    while (word !== currentWord) {
        let lastWordU = false;
        if (currentWord.length === 5 && currentWord[4] === 'U') {
            let currentIndex = 4;
            while (currentWord[currentIndex] === 'U') currentIndex -= 1;
            currentWord = currentWord.substring(0, currentIndex + 1);
            lastWordU = true;
        }
        if (currentWord.length < 5 && !lastWordU) currentWord += 'A';
        else if (currentWord[currentWord.length - 1] === 'A') currentWord = currentWord.substring(0, currentWord.length - 1) + 'E';
        else if (currentWord[currentWord.length - 1] === 'E') currentWord = currentWord.substring(0, currentWord.length - 1) + 'I';
        else if (currentWord[currentWord.length - 1] === 'I') currentWord = currentWord.substring(0, currentWord.length - 1) + 'O';
        else if (currentWord[currentWord.length - 1] === 'O') currentWord = currentWord.substring(0, currentWord.length - 1) + 'U';
        answer += 1;
    }
    return answer;
}

console.log(solution('UUUUU'));
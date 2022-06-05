function solution(n, words) {
    let speaker = 1;
    let count = 0;
    const list = [];
    for (let i = 0; i < words.length; i++) {
        count += 1;
        let pWord = i > 0 ? words[i - 1] : null;
        const cWord = words[i];
        if (list.includes(cWord) || (pWord && pWord[pWord.length - 1] !== cWord[0])) {
            return [speaker, Math.ceil(count / n)];
        }
        list.push(words[i]);
        speaker = speaker === n ? 1 : speaker + 1;
    }
    return [0, 0];
}

//console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
//console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));

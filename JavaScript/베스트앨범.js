function solution(genres, plays) {
    const answer = [];
    const playedTimes = {};
    for (let i = 0; i < genres.length; i++) {
        if (playedTimes[genres[i]]) playedTimes[genres[i]] += plays[i];
        else (playedTimes[genres[i]]) = plays[i];
    }
    const genreType = Object.keys(playedTimes);
    const totalTimes = Object.values(playedTimes);
    const length = genreType.length;
    for (_ = 0; _ < length; _++) {
        const idx = totalTimes.indexOf(Math.max.apply(null, totalTimes));
        const thisGenre = genreType[idx];
        genreType.splice(idx, 1);
        totalTimes.splice(idx, 1);
        let firstTime = 0;
        let secondTime = 0;
        let firstIdx = -1;
        let secondIdx = -1;
        for (let j = 0; j < genres.length; j++) {
            if (genres[j] === thisGenre && plays[j] > firstTime) {
                if (firstIdx !== -1) {
                    secondIdx = firstIdx;
                    secondTime = firstTime;
                }
                firstIdx = j;
                firstTime = plays[j];
            } else if (genres[j] === thisGenre && plays[j] > secondTime){
                secondIdx = j;
                secondTime = plays[j];
            }
        }
        answer.push(firstIdx);
        if (secondIdx !== -1) {
            answer.push(secondIdx);
        }
    }
    return answer;
}

//console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))
console.log(solution(["classic", "pop", "pop"], [400, 200, 100]))
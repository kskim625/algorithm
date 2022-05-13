function solution(n, times) {
    if (times.length === 1) return n * times[0];
    times.sort((a, b) => { return a - b });
    let min = 0, max = Math.max.apply(null, times) * n;
    let answerList = new Array(times.length);
    while (min !== max) {
        const ave = Math.floor((min + max) / 2);
        let totalPeople = 0;
        for (let i = 0; i < times.length; i++) {
            const p = Math.floor(ave / times[i]);
            totalPeople += p;
            answerList[i] = p * times[i];
        }
        if (min === ave) {
            for (let j = 0; j < times.length; j++) {
                answerList[j] += times[j];
            }
            return Math.min.apply(null, answerList);
        }
        if (n < totalPeople) {
            max = ave;
        } else if (n > totalPeople) {
            min = ave;
        } else {
            break;
        }
    }
    return Math.max.apply(null, answerList);
}

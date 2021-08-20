function solution(progresses, speeds) {
    var answer = [];
    let distribution;

    while (progresses.length !== 0) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        distribution = 0;
        for (let j = 0; j < progresses.length; ) {
            if (progresses[j] >= 100) {
                distribution++;
                progresses.shift();
                speeds.shift();
            } else {
                if (distribution > 0) answer.push(distribution);
                break;
            }
        }
    }
    answer.push(distribution);
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
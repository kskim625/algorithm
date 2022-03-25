function solution(jobs) {
    jobs.sort((a, b) => { return a[0] - b[0] });
    const numOfJobs = jobs.length;
    let timePassed = 0;
    let totalWaitingTime = 0;
    while (jobs.length > 0) {
        if (jobs[0][0] > timePassed) {
            timePassed += 1;
            continue;
        }
        let currentJobIdx = 0;
        let waitingTime = jobs[0][1];
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i][0] > timePassed) break;
            if (jobs[i][1] < waitingTime) {
                currentJobIdx = i;
                waitingTime = jobs[i][1];
            }
        }
        timePassed += waitingTime;
        totalWaitingTime += timePassed - jobs[currentJobIdx][0];
        jobs.splice(currentJobIdx, 1);
    }
    return Math.floor(totalWaitingTime / numOfJobs);
}

// console.log(solution([[1, 9], [0, 3], [2, 6], [2, 1]]));
// console.log(solution([[0, 3], [1, 9], [2, 6]]));
console.log(solution([[1, 3], [1, 9], [2, 6]]));
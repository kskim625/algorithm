function solution(n, t, m, timetable) {
    timetable = timetable.sort();
    let initialHour = 9, initialMin = 0, thisTime;
    for (let i = 0; i < n; i++) {
        const thisHour = String(initialHour).length === 1 ? '0' + String(initialHour) : String(initialHour);
        const thisMin = String(initialMin).length === 1 ? '0' + String(initialMin) : String(initialMin);
        thisTime = thisHour + ':' + thisMin;
        initialMin += t;
        if (initialMin >= 60) {
            initialHour += 1;
            initialMin -= 60;
        }
        let crewOnBus = 0;
        for (let j = 0; j < m; j++) {
            if (crewOnBus + timetable.length >= m && i + 1 === n && j + 1 === m) {
                if (timetable[0] > thisTime) return thisTime;
                const answerTime = timetable[0].split(':');
                let tempHour = Number(answerTime[0]), tempMin = Number(answerTime[1]) - 1;
                if (tempMin < 0) {
                    tempHour -= 1;
                    tempMin = 60 + tempMin;
                }
                const answerHour = String(tempHour).length === 1 ? '0' + String(tempHour) : String(tempHour);
                const answerMin = String(tempMin).length === 1 ? '0' + String(tempMin) : String(tempMin);
                return answerHour + ':' + answerMin;
            }
            if (timetable.length > 0 && timetable[0] <= thisTime) {
                crewOnBus += 1;
                timetable.shift();
            }
        }
    }
    return thisTime;
}

//console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));
//console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));
//console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));
//console.log(solution(1, 1, 1, ["23:59"]));
console.log(solution(10, 60, 45, ["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]))

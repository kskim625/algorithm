const trim = (arr) => {
    while (Number(arr[2]) >= 60) {
        arr[2] = String(Number(arr[2]) - 60);
        arr[1] = String(Number(arr[1]) + 1);
    }
    while (Number(arr[1]) >= 60) {
        arr[1] = String(Number(arr[1]) - 60);
        arr[0] = String(Number(arr[0]) + 1);
    }
    while (Number(arr[2]) < 0) {
        arr[2] = String(Number(arr[2]) + 60);
        arr[1] = String(Number(arr[1]) - 1);
    }
    while (Number(arr[1]) < 0) {
        arr[1] = String(Number(arr[1]) + 60);
        arr[0] = String(Number(arr[0]) - 1);
    }
    arr[2] = Number(arr[2]).toFixed(3);
    while (arr[1].length < 2) {
        arr[1] = '0' + arr[1];
    }
    while (arr[2].length < 6) {
        arr[2] = '0' + arr[2];
    }
    return arr.join(':');
}

function solution(lines) {
    const times = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].split(' ');
        const endTime = line[1];
        let startTimeArr = line[1].split(':');
        startTimeArr[2] = (Number(startTimeArr[2]) - Number(line[2].replace('s', '')) + 0.001).toFixed(3);
        const startTime = trim(startTimeArr);
        times.push([startTime, endTime]);
    }
    let answer = 0;
    for (let j = 0; j < times.length; j++) {
        const thisTimes = times[j];
        let arr = thisTimes[1].split(':');
        arr[2] = (Number(arr[2]) + 0.999).toFixed(3);
        const compareArr = [thisTimes[1], trim(arr)];
        let count = 0;
        for (let k = 0; k < times.length; k++) {
            if ((times[k][0] <= compareArr[0] && times[k][1] >= compareArr[1]) ||
                (times[k][0] >= compareArr[0] && times[k][0] <= compareArr[1]) ||
                (times[k][1] >= compareArr[0] && times[k][1] <= compareArr[1])) {
                count += 1;
            }
        }
        answer = Math.max(answer, count);
    }
    return answer;
}

console.log(solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
    ]))

console.log(solution(["2016-09-15 00:00:00.000 2.351s", "2016-09-15 00:00:00.066 3s"]))

//console.log(solution(	["2016-09-15 00:00:00.000 2.3s", "2016-09-15 00:00:01.100 0.1s"]))
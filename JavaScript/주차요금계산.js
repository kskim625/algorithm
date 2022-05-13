function solution(fees, records) {
    const map = {};
    records.map((record) => {
        const arr = record.split(' ');
        if (!map[arr[1]]) {
            map[arr[1]] = [arr[0]];
        } else {
            map[arr[1]].push(arr[0]);
        }
    });
    
    const entries = Object.entries(map);
    const feesMap = {};
    entries.map((entry) => {
        if (entry[1].length % 2 === 1) {
            map[entry[0]].push('23:59');
        }
        const arr = map[entry[0]];
        let time = 0;
        for (let i = 0; i < arr.length; i += 2) {
            const carIn = arr[i].split(':');
            const carOut = arr[i + 1].split(':');
            let hour = Number(carOut[0]) - Number(carIn[0]);
            let min = Number(carOut[1]) - Number(carIn[1]);
            hour = min < 0 ? hour - 1 : hour;
            min = min < 0 ? min + 60 : min;
            time += hour * 60 + min;
        }
        const fee = time >= fees[0] ? fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3] : fees[1];
        feesMap[entry[0]] = fee;
    });
    
    const feeArr = Object.entries(feesMap).sort((a, b) => { return a[0] - b[0] });
    const answer = [];
    feeArr.map((arr) => {
        answer.push(arr[1]); 
    });
    return answer;
}

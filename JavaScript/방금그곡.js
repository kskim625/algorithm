function solution(m, musicinfos) {
    for (let a = 1; a < m.length; a++) {
        if (m[a] === '#') m = m.substring(0, a - 1) + m[a - 1].toLowerCase() + m.substring(a, m.length);
    }
    const music = [];
    musicinfos.map((m, i) => {
        const currentSong = m.split(',');
        const startTime = currentSong[0].split(':').map(Number), endTime = currentSong[1].split(':').map(Number);
        const playedHour = endTime[1] - startTime[1] >= 0 ? endTime[0] - startTime[0] : endTime[0] - startTime[0] - 1;
        const playedMin = endTime[1] - startTime[1] >= 0 ? endTime[1] - startTime[1] : 60 + endTime[1] - startTime[1];
        const totalMin = playedHour * 60 + playedMin;
        let idx = 0, time = 0, playedMusic = '';
        while (time < totalMin) {
            if (idx === currentSong[3].length) idx = 0;
            if (idx < currentSong[3].length - 1 && currentSong[3][idx + 1] === '#') {
                playedMusic += currentSong[3][idx].toLowerCase() + currentSong[3][idx + 1];
                idx += 1;
            } else playedMusic += currentSong[3][idx];
            idx += 1;
            time += 1;
        }
        music.push([playedMusic, i, currentSong[2]]);
    });
    const candidates = music.filter((v) => {
        if (v[0].includes(m)) return true;
        return false;
    });
    if (candidates.length === 0) return '(None)';
    let answer = [0, ''];
    candidates.forEach((c) => {
        if (c[0].length > answer[0]) {
            answer[0] = c[0].length;
            answer[1] = c[2];
        }
    });
    return answer[1];
}

console.log(solution("ABC#", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]));
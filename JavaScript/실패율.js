function solution(N, stages) {
    const answer = [];
    const players = {};
    const playersUncleared = {};
    const playersReached = {};
    for (let i = 0; i < N; i++) {
        players[i + 1] = 0;
        playersUncleared[i + 1] = 0;
        playersReached[i + 1] = 0;
    }
    for (let j = 0; j < stages.length; j++) {
        stages[j] !== N + 1 ? playersUncleared[stages[j]] += 1 : 0;
        for (let k = 1; k <= stages[j]; k++) {
            k !== N + 1 ? playersReached[k] += 1 : 0;
        }
    }
    for (let l = 1; l <= N; l++) {
        players[l] = (playersReached[l] && playersReached[l] !== 0) ? playersUncleared[l] / playersReached[l] : 0;
    }
    const entries = Object.entries(players).sort((a, b) => b[1] - a[1]);
    entries.forEach((entry) => { answer.push(Number(entry[0])) });
    return answer;
}

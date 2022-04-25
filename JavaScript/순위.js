function solution(n, results) {
    let answer = 0;
    const ranks = {};
    for (let i = 0; i < n; i++) {
        ranks[i + 1] = { front: [], back: [] };
    }
    for (let j = 0; j < results.length; j++) {
        ranks[results[j][0]].back.push(results[j][1]);
        ranks[results[j][1]].front.push(results[j][0]);
    }
    while (true) {
        const original = JSON.stringify(ranks);
        for (let x = 1; x <= n; x++) {
            const front = JSON.parse(JSON.stringify(ranks[x].front));
            for (let y = 0; y < front.length; y++) {
                const thisFront = ranks[front[y]].front;
                for (let z = 0; z < thisFront.length; z++) {
                    if (!ranks[x].front.includes(thisFront[z])) {
                        ranks[x].front.push(thisFront[z]);
                    }
                }
            }
            const back = JSON.parse(JSON.stringify(ranks[x].back));
            for (let y = 0; y < back.length; y++) {
                const thisBack = ranks[back[y]].back;
                for (let z = 0; z < thisBack.length; z++) {
                    if (!ranks[x].back.includes(thisBack[z])) {
                        ranks[x].back.push(thisBack[z]);
                    }
                }
            }
        }
        if (original === JSON.stringify(ranks)) break;
    }
    for (let k = 1; k <= n; k++) {
        if (ranks[k].front.length + ranks[k].back.length === n - 1) {
            answer += 1;
        }
    }
    return answer;
}

function solution(gems) {
    let answer = [1, gems.length];
    const gemTypes = [];
    gems.forEach((g) => {
        if (!gemTypes.includes(g)) gemTypes.push(g);
    });
    const types = gemTypes.length;
    if (types === 1) return [1, 1];
    for (let i = 0; i < gems.length; i++) {
        const gemTypes = [gems[i]];
        let j = i + 1;
        while (j < gems.length) {
            if (!gemTypes.includes(gems[j])) gemTypes.push(gems[j]);
            if (j - i > answer[1] - answer[0] || gemTypes.length === types) break;
            j += 1;
        }
        if (gemTypes.length === types && j - i < answer[1] - answer[0]) answer = [i + 1, j + 1];
    }
    return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));
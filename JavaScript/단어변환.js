function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    return dfs(begin, target, words, []);
}

function dfs(begin, target, words, visited) {
    if (begin === target) return visited.length;
    
    let difference, c = 51;
    words.forEach((word) => {
        if (!visited.includes(word)) {
            difference = 0;
            for (let i = 0; i < word.length; i++) if (begin[i] !== word[i]) difference++;
            if (difference === 1) {
                let v = visited.slice();
                v.push(word);
                let c_temp = dfs(word, target, words, v);
                if (c_temp != undefined) c = Math.min(c, c_temp);
            }
        }
    })
    return c;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
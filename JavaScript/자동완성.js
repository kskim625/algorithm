//unsolved
function solution(words) {
    let done = new Array(words.length).fill(false);
    let max = 0, answer = 0;
    for (let a = 0; a < words.length; a++) {
        if (words[a].length > max) max = words[a].length;
    }
    let index = 0;
    while (index < max) {
        const list = [];
        for (let i = 0; i < words.length; i++) {
            if (words[i].length <= index) {
                done[i] = true;
            }
            if (words[i].length > index) {
                if (!list.includes(words[i][index])) {
                    list.push(words[i][index]);
                } else {
                    done[i] = true;
                }
            }
        }
        let add = 0;
        for (let j = 0; j < done.length; j++) {
            if (!done[j]) add += 1;
        }
        answer += add;
        console.log(list, done, answer)
        index += 1;
    }
}

console.log(solution(["go","gone","guild"]));
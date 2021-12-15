const getWires = (wireTree, used, n, key) => {
    if (used.includes(key)) return;
    used.push(key);
    for (let i = 0; i < wireTree[key].length; i++) {
        getWires(wireTree, used, n, wireTree[key][i]);
    }
    return Math.abs(2 * used.length - n);
}

function solution(n, wires) {
    let answer = n;
    for (let i = 0; i < wires.length; i++) {
        let wireTree = {};
        const tempWires = JSON.parse(JSON.stringify(wires));
        tempWires.splice(i, 1);
        tempWires.forEach((w) => {
            if (wireTree[w[0]]) wireTree[w[0]].push(w[1]);
            else wireTree[w[0]] = [w[1]];
            if (wireTree[w[1]]) wireTree[w[1]].push(w[0]);
            else wireTree[w[1]] = [w[0]];
        });
        answer = Math.min(answer, getWires(wireTree, [], n, Number(Object.keys(wireTree)[0])));
    }
    return answer;
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]));
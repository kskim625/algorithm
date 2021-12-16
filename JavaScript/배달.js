//unsolved
function solution(N, road, K) {
    let distances = new Array(N + 1).fill(10e9), roadTree = {};
    distances[1] = 0;
    road.forEach((r) => {
        if (roadTree[r[0]]) roadTree[r[0]].push([r[1], r[2]]);
        else roadTree[r[0]] = [[r[1], r[2]]];
        if (roadTree[r[1]]) roadTree[r[1]].push([r[0], r[2]]);
        else roadTree[r[1]] = [[r[0], r[2]]];
    });
    const roadKeys = Object.keys(roadTree);
    const roads = [[...roadTree[roadKeys[0]][0], Number(roadKeys[0])]];
    while (roads.length > 0) {
        const currentRoad = roads.pop();
        const currentKey = currentRoad[2];
        if (distances[currentKey] + currentRoad[1] < distances[currentRoad[0]]) {
            distances[currentRoad[0]] = distances[currentKey] + currentRoad[1];
        }
        while (roadTree[currentRoad[0]].length > 0) {
            roads.push([...roadTree[currentRoad[0]].pop(), currentRoad[0]]);
        }
    }
    return distances.filter((d) => d <= K).length;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3));
console.log(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4));
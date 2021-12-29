function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let location = -30001, answer = 0;
    routes.forEach((r) => {
        console.log(r, answer, location)
        if (location < r[0]) {
            location = r[1];
            answer += 1;
        }
    });
    return answer;
}

console.log(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]));
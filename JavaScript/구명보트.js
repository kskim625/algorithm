function solution(people, limit) {
    let answer = 0, idx_front = 0, idx_back = people.length - 1;
    people.sort((f, s) => { return s - f });
    while (idx_front < idx_back) {
        if (people[idx_front] + people[idx_back] > limit) {
            idx_front++;
        } else {
            idx_front++;
            idx_back--;
        }
        answer++;
    }
    return idx_front === idx_back ? answer + 1 : answer;
}

//console.log(solution([40, 40, 40, 50, 40, 50], 130))
console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 80, 50], 100))
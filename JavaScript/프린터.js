function solution(priorities, location) {
    let answer = 1, currentNumber;
    while (priorities.length > 0) {
        currentNumber = priorities.shift();
        if (currentNumber >= Math.max.apply(null, priorities)) {
            if (location === 0) return answer;
            else answer++;
        } else priorities.push(currentNumber);
        if (location === 0) location = priorities.length - 1;
        else location--;
    }
    return answer;
}

console.log(solution([2, 1, 3, 2], 2, 1));
console.log(solution([1, 1, 9, 1, 1, 1], 0, 5));
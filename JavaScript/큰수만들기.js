function solution(number, k) {
    let removed = 0;
    const stack = [number[0]];
    for (let i = 1; i < number.length; i++) {
        let idx = stack.length - 1;
        while (stack[idx] < number[i] && idx >= 0 && removed < k) {
            stack.pop();
            removed += 1;
            idx -= 1;
        }
        stack.push(number[i]);
    }
    const answer = stack.join('');
    return removed === k ? answer : answer.substring(0, answer.length - k);
}

function solution(numbers) {
    const answer = [];
    numbers.forEach((n) => {
        const binary = n.toString(2);
        let idx = binary.length - 1, count = -1;
        while (idx >= 0 && binary[idx] !== '0') {
            idx -= 1;
            count += 1;
        }
        answer.push(count > -1 ? n + 2 ** count : n + 1);
    });
    return answer;
}

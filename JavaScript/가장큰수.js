function solution(numbers) {
    numbers.sort((a, b) => {
        return Number(String(b) + String(a)) - Number(String(a) + String(b));
    });
    const answer = numbers.join('');
    return answer[0] === '0' ? '0' : answer;
}

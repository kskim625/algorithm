//unsolved(효율성)
function solution(number, k) {    
    let removed = 0, idx = 0;
    while (removed < k && idx < number.length - 1) {
        if (number[idx] < number[idx + 1]) {
            number = number.substring(0, idx) + number.substring(idx + 1, number.length);
            removed += 1;
            idx -= idx > 0 ? 1 : 0;
            continue;
        }
        idx += 1;
    }
    return removed < k ? number.substring(0, number.length - k) : number;
}

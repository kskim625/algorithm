function solution(s) {
    const n = s.split(' ').sort((a, b) => { return Number(a) - Number(b) });
    return n[0] + ' ' + n[n.length - 1];
}

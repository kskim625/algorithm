function solution(begin, end) {
    const result = begin === 1 ? [0] : [];
    while (result.length <= end - begin) {
        const len = result.length + begin;
        let added = false;
        for (let i = 2; i ** 2 <= len; i++) {
            if (len % i === 0 && len / i < 10000000) {
                result.push(len / i);
                added = true;
                break;
            }
        }
        if (!added) result.push(1);
    }
    return result;
}

function solution(citations) {
    const maxCitations = citations[citations.length - 1];
    let hIndex = 0;
    while (hIndex <= maxCitations) {
        let mentioned = 0, notMentioned = 0;
        for (let i = 0; i < citations.length; i++) {
            if (citations[i] >= hIndex) mentioned += 1;
            else notMentioned += 1;
        }
        if (mentioned > hIndex && mentioned > notMentioned) {
            hIndex += 1;
        } else {
            if (mentioned < hIndex || mentioned < notMentioned) {
                hIndex -= 1;
            }
            break;
        }
    }
    return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([22, 42]));
// console.log(solution([1, 1, 1]));
// console.log(solution([0]));
console.log(solution([1, 4]));
console.log(solution([0, 1, 2]));
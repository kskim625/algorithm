function solution(s) {
    let result = s.length;
    for (let i = 1; i <= s.length / 2; i++) {
        let j = 0;
        let str = '';
        while (j < s.length) {
            let zip = s.substring(j, j + i);
            let count = 0;
            while (s.substring(j, j + i) === zip) {
                count += 1;
                j += i;
            }
            str += count > 1 ? count + zip : zip;
        }
        if (result > str.length) {
            result = str.length;
        }
    }
    return result;
}

console.log(solution("aabbaccc"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));

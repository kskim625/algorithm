function solution(s){
    let leftCount = 0;
    let rightCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') leftCount += 1;
        if (s[i] === ')') rightCount += 1;
        if (leftCount < rightCount) return false;
    }
    return leftCount === rightCount;
}

console.log(solution("(())()"));
console.log(solution(")()("));
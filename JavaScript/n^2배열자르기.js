function solution(n, left, right) {
  let answer = [];
  answer.length = right - left + 1;

  let x;
  let y;
  let answerIndex = 0;
  for (let k = left; k < right + 1; k++) {
    x = k === 0 ? 0 : k % n;
    y = k === 0 ? 0 : Math.floor(k / n);
    answer[answerIndex] = Math.max(x, y) + 1;
    answerIndex += 1;
  }

  return answer;
}

//console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));

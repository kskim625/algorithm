const dfs = (k, d, count) => {
  if (d.length === 0) return count;
  let temp = [];
  temp.length = d.length;
  for (let a = 0; a < d.length; a++) temp[a] = d[a][0];
  if (k < Math.min.apply(null, temp)) return count;

  let answer = 0;
  for (let i = 0; i < d.length; i++) {
    if (k >= d[i][0]) {
      const clone = d.slice();
      clone.splice(i, 1);
      answer = Math.max(answer, dfs(k - d[i][1], clone, count + 1));
    }
  }
  return answer === 0 ? count : answer;
};

function solution(k, dungeons) {
  const answer = dfs(k, dungeons, 0);
  return answer;
}

console.log(
  solution(80, [
    [50, 40],
    [30, 10],
    [80, 20],
  ])
);

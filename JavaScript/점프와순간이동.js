const getValue = (memo, idx) => {
  if (memo[idx]) return memo[idx];
  memo[idx] =
    idx % 2 === 0 ? getValue(memo, idx / 2) : getValue(memo, idx - 1) + 1;
  return memo[idx];
};

function solution(n) {
  let memo = new Array(n + 1);
  memo[1] = 1;
  getValue(memo, n);
  return memo[n];
}

console.log(solution(234));

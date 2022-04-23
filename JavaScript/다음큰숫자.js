const binary = (num) => {
  let result = "";
  while (num !== 1) {
    result += num % 2;
    num = Math.floor(num / 2);
  }
  return "1" + result;
};

function solution(n) {
  const count = binary(n)
    .split("")
    .filter((s) => {
      return s === "1";
    }).length;
  while (true) {
    n += 1;
    if (
      count ===
      binary(n)
        .split("")
        .filter((s) => {
          return s === "1";
        }).length
    ) {
      return n;
    }
  }
}

console.log(solution(78));

const getMultiples = (num, multiples) => {
    for (let i = 1; i < num + 1; i++) {
        if (num % i === 0) multiples.push(i);
    }
}

function solution(brown, yellow) {
    const allTiles = brown + yellow, multiples = [];
    getMultiples(allTiles, multiples);
    let left = 0, right = multiples.length - 1;
    while (left <= right) {
        if (multiples[left] + multiples[right] - 2 === brown / 2) return [multiples[right], multiples[left]];
        left += 1;
        right -= 1;
    }
}

//console.log(solution(10, 2));
console.log(solution(8, 1));
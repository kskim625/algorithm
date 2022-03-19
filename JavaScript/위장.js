function solution(clothes) {
    let clothesSet = {};
    clothes.forEach((cloth) => {
        if (clothesSet[cloth[1]]) clothesSet[cloth[1]].push(cloth[0]);
        else clothesSet[cloth[1]] = [cloth[0]];
    });
    console.log(clothesSet)
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
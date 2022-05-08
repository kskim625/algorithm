function solution(clothes) {
    let clothesSet = {}, answer = 1;
    clothes.forEach((cloth) => {
        if (clothesSet[cloth[1]]) clothesSet[cloth[1]].push(cloth[0]);
        else clothesSet[cloth[1]] = [cloth[0]];
    });
    const values = Object.values(clothesSet);
    for (let i = 0; i < values.length; i++) {
        answer *= values[i].length + 1;
    }
    return answer - 1;
}

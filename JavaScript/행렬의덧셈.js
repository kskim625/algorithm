function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let contents = new Array(arr1[i].length).fill(0);
        for (let j = 0; j < arr1[i].length; j++) {
            contents[j] = arr1[i][j] + arr2[i][j];
        }
        answer.push(contents);
    }
    return answer;
}

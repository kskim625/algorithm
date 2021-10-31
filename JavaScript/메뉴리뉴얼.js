// 실패
function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }

function solution(orders, course) {
    const lists = [];
    for (let a = 0; a < orders.length; a++)
        for (let b = 0; b < orders[a].length; b++)
            if (!lists.includes(orders[a][b])) lists.push(orders[a][b]);

    const menuList = [];
    let menuCount = {};
    for (let i = 0; i < course.length; i++) {
        menuList.push(combination(lists, course[i]));
        for (let j = 0; j < menuList[i].length; j++) {
            menuCount[menuList[i][j]] = 0;
        }
    }
    const keys = Object.keys(menuCount);
    for (let k = 0; k < orders.length; k++) {
        for (let l = 0; l < keys.length; l++) {
            let included = true;
            for (let m = 0; m < keys[l].length; m += 2) {
                if (orders[k].indexOf(keys[l][m]) === -1) {
                    included = false;
                    break;
                }
            }
            if (included) menuCount[keys[l]] += 1;
        }
    }
    const temp = Object.entries(menuCount).sort(([, a], [, b]) => b - a);
    let answer = [];
    let maxNum = 0;
    for (let x = 0; x < course.length; x++) {
        for (let y = 0; y < temp.length; y++) {
            if (course[x] * 2 - 1 === temp[y][0].length) {
                maxNum = temp[y][1];
                break;
            }
        }
        for (let z = 0; z < temp.length; z++) {
            if (course[x] * 2 - 1 === temp[z][0].length && temp[z][1] > 1 && temp[z][1] === maxNum) {
                answer.push(temp[z][0]);
            }
        }
    }
    answer.sort();
    for (let i = 0; i < answer.length; i++) {
        answer[i] = answer[i].replace(/\,/g, '').split('').sort().join('');
    }
    return answer;
}

//console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))
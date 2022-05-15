//unsolved

const addStr = (str, idx, result) => {
    return result + str[idx];
}

function solution(orders, course) {
    const menus = {};
    for (let a = 0; a < orders.length; a++) {
        orders[a] = orders[a].split("").sort().join("");
    }
    for (let i = 0; i < orders.length; i++) {
        for (let x = 0; x < orders[i].length; x++) {
            for (let j = x + 1; j < orders[i].length + 1; j++) {
                for (let k = 0; k < orders[i].length; k++) {
                    let str = '';
                    for (let idx = k; idx < orders[i].length; idx++) {
                        let currentLength = 0;
                        while (currentLength < j) {
                            str += orders[i][idx];
                            currentLength += 1;
                            currentIdx += 1;
                        }
                        if (str.length !== j) break;
                        console.log(str)
                        if (menus[str]) menus[str] += 1;
                        else menus[str] = 1;
                        
                    }
                }
            }
        }
    }
    console.log(menus)
    return 0;
}

//console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
console.log(solution(["XYZ", "WXY", "AWX"], [2, 3, 4]));

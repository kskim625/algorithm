// 실패
function getIndex(answer, arr) {
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (answer[i][j] !== arr[j]) break;
            return i;
        }
    }
    return -1;
}

function checkInclusion(answer, arr) {
    let inclusion = false;
    for (let i = 0; i < answer.length; i++) {
        let count = 0;
        for (let j = 0; j < 3; j++) {
            if (answer[i][j] !== arr[j]) break;
            count++;
            if (count === 3) inclusion = true;
        }
    }
    return inclusion;
}

function solution(n, build_frame) {
    const answer = [];

    // [x, y, a, b] : [x, y: 가로/세로 좌표], [a 0:기둥, 1:보], [b 0:삭제, 1:설치]
    let x, y, a, b;
    for (let i = 0; i < build_frame.length; i++) {
        x = build_frame[i][0];
        y = build_frame[i][1];
        a = build_frame[i][2];
        b = build_frame[i][3];
        if (b === 0) {
            if (a === 0) {
                if (checkInclusion(answer, [x, y+1, 0]) && (!checkInclusion(answer, [x-1, y+1, 1]) || !checkInclusion(answer, [x, y+1, 1]))) continue;
                if (checkInclusion(answer, [x-1, y+1, 1]) && (!checkInclusion(answer, [x-1, y, 0]) && (!checkInclusion(answer, [x-2, y+1, 1]) && !checkInclusion(answer, [x, y+1, 1])))) continue;
                if (checkInclusion(answer, [x, y+1, 1]) && (!checkInclusion(answer, [x-1, y+1, 1]) && !checkInclusion(answer, [x+1, y+1, 1]))) continue;
                answer.splice(getIndex(answer, [x, y, a]), 1);
            } else if (a === 1) {
                if (checkInclusion(answer, [x, y, 0]) && (!checkInclusion(answer, [x-1, y, 1]) && !checkInclusion(answer, [x, y-1, 0]))) continue;
                if (checkInclusion(answer, [x+1, y, 0]) && (!checkInclusion(answer, [x+1, y, 1]) && !checkInclusion(answer, [x+1, y-1, 0]))) continue;
                if (checkInclusion(answer, [x-1, y, 1]) && !checkInclusion(answer, [x, y-1, 0]) && !checkInclusion(answer, [x-1, y-1, 0])) continue;
                if (checkInclusion(answer, [x+1, y, 1]) && !checkInclusion(answer, [x+2, y-1, 0]) && !checkInclusion(answer, [x+1, y-1, 0])) continue;
                answer.splice(getIndex(answer, [x, y, a]), 1);
            }
        } else if (b === 1) {
            if (a === 0) {
                if (y === 0 || checkInclusion(answer, [x, y-1, 0]) || checkInclusion(answer, [x-1, y, 1]) || checkInclusion(answer, [x, y, 1])) {
                    answer.push([x, y, a]);
                }
            } else if (a === 1) {
                if (y === 0) continue;
                if (checkInclusion(answer, [x, y-1, 0]) || checkInclusion(answer, [x+1, y-1, 0]) || (checkInclusion(answer, [x-1, y, 1]) && checkInclusion(answer, [x+1, y, 1]))) {
                    answer.push([x, y, a]);
                }
            }
        }
    }
    return answer.sort();
}

//console.log(solution(5, [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]))
console.log(solution(5, [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]]))
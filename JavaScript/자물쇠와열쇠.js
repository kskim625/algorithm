function solution(key, lock) {
    const newLockLength = lock.length + key.length * 2;
    const newLock = new Array(newLockLength);
    for (let l = 0; l < newLockLength; l++) {
        newLock[l] = new Array(newLockLength).fill(0);
        if (l >= key.length && l < newLockLength - key.length) {
            for (let m = 0; m < lock.length; m++) newLock[l][m + key.length] = lock[l - key.length][m];
        }
    }
    let key1 = key.slice(), key2 = new Array(key.length), key3 = new Array(key.length), key4 = new Array(key.length);
    for (let a = 0; a < key.length; a++) {
        key2[a] = new Array(key.length).fill(0);
        key3[a] = new Array(key.length).fill(0);
        key4[a] = new Array(key.length).fill(0);
    }
    for (let i = 0; i < key1.length; i++) {
        for (let j = 0; j < key1.length; j++) {
            key2[j][key1.length - 1 - i] = key1[i][j];
            key3[key1.length - 1 - i][key1.length - 1 - j] = key1[i][j];
            key4[key1.length - 1 - j][i] = key1[i][j];
        }
    }
    const keySet = [key1, key2, key3, key4];
    for (let k = 0; k < keySet.length; k++) {
        for (let x = 0; x < newLockLength - key.length; x++) {
            for (let y = 0; y < newLockLength - key.length; y++) {
                const newLockTemp = JSON.parse(JSON.stringify(newLock));
                for (let i = 0; i < keySet[k].length; i++) {
                    for (let j = 0; j < keySet[k][i].length; j++) {
                        newLockTemp[i + x][j + y] = keySet[k][i][j] + newLockTemp[i + x][j + y];
                    }
                }
                let count = 0;
                for (let k = 0; k < lock.length; k++) {
                    for (let l = 0; l < lock.length; l++) if (newLockTemp[k + key.length][l + key.length] === 1) count += 1;
                }
                if (count === lock.length ** 2) return true;
            }
        }
    }
    return false;
}

//console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));
console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]));
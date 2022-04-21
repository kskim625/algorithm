function solution(str1, str2) {
    const rule = /[a-zA-Z]{2}/i;
    const str1Arr = [], str2Arr = [];
    let u = 0, n = 0;
    for (let i = 0; i < str1.length - 1; i++) {
        const lower = str1.substring(i, i + 2).toLowerCase();
        if (rule.test(lower)) str1Arr.push(lower);
    }
    for (let j = 0; j < str2.length - 1; j++) {
        const lower = str2.substring(j, j + 2).toLowerCase();
        if (rule.test(lower)) str2Arr.push(lower);
    }
    u = str1Arr.length + str2Arr.length;
    for (let k = 0; k < str1Arr.length; k++) {
        if (str2Arr.includes(str1Arr[k])) {
            str2Arr.splice(str2Arr.indexOf(str1Arr[k]), 1);
            n += 1;
        }
    }
    return u === n ? 65536 : Math.floor(65536 * (n / (u - n)));
}

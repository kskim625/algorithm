function solution(p) {
    
    if (p === '') return '';
    
    let left = 0, right = 0;
    let u = '', v = '';
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') left++;
        else right++;
        u += p[i];
        if (left === right) {
            v = p.substring(i+1, p.length);
            break;
        }
    }

    if (correctString(u)) return u + solution(v);
    
    let temp = '(' + solution(v) + ')';
    for (let j = 1; j < u.length-1; j++) {
        if (u[j] === '(') temp += ')';
        else temp += '(';
    } 
    return temp;
}

const correctString = (s) => {
    let left = 0, right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') left++;
        else right++;
        if (right > left) return false;
    }
    return true;
}
function doCaculation(o, idx, sign) {
    if (sign === '+') o[idx - 1] = o[idx - 1] + o[idx + 1];
    else if (sign === '-') o[idx - 1] = o[idx - 1] - o[idx + 1];
    else o[idx - 1] = o[idx - 1] * o[idx + 1];
    o.splice(idx, 2);
}

function calculate(o, first, second, third) {
    for (let i = 0; i < o.length; i++) 
        if (o[i] === first) {
            doCaculation(o, i, first);
            i--;
        }
    for (let j = 0; j < o.length; j++)
        if (o[j] === second) {
            doCaculation(o, j, second);
            j--;
        }
    for (let k = 0; k < o.length; k++)
        if (o[k] === third) {
            doCaculation(o, k, third);
            k--;
        }
    return Math.abs(o[0]);
}

function solution(expression) {
    const answer = [], operation = [];
    let num = '';
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '-' || expression[i] === '+' || expression[i] === '*') {
            operation.push(Number(num));
            operation.push(expression[i]);
            num = '';
        } else num += expression[i];
    }
    operation.push(Number(num));
    
    answer.push(calculate(operation.slice(), '+', '-', '*'));
    answer.push(calculate(operation.slice(), '+', '*', '-'));
    answer.push(calculate(operation.slice(), '-', '+', '*'));
    answer.push(calculate(operation.slice(), '-', '*', '+'));
    answer.push(calculate(operation.slice(), '*', '-', '+'));
    answer.push(calculate(operation.slice(), '*', '+', '-'));

    return Math.max.apply(null, answer);
}

console.log(solution("100-200*300-500+20"));
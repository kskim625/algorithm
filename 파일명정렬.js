const switchOrder = (head, number, tail, idx) => {
    let item = head.splice(idx, 1);
    head.splice(idx + 1, 0, item[0]);
    item = number.splice(idx, 1);
    number.splice(idx + 1, 0, item[0]);
    item = tail.splice(idx, 1);
    tail.splice(idx + 1, 0, item[0]);
}

function solution(files) {
    let answer = new Array(files.length), head = [], number = [], tail = [];
    files.forEach((f) => {
        let h = '', n = '', t = '';
        for (let i = 0; i < f.length; i++) {
            if (n === '' && f[i] !== '0' && !Number(f[i])) h += f[i];
            else if (t === '' && (f[i] === '0' || Number(f[i]))) n += f[i];
            else t += f[i];
        }
        head.push(h);
        number.push(n);
        tail.push(t);
    });
    while (true) {
        const originalOrder = JSON.stringify(head) + JSON.stringify(number) + JSON.stringify(tail);
        for (let j = 0; j < files.length - 1; j++) {
            if (head[j].toLowerCase() > head[j + 1].toLowerCase()) switchOrder(head, number, tail, j);
            else if (head[j].toLowerCase() === head[j + 1].toLowerCase() && Number(number[j]) > Number(number[j + 1])) switchOrder(head, number, tail, j);
        }
        if (originalOrder === JSON.stringify(head) + JSON.stringify(number) + JSON.stringify(tail)) {
            for (let k = 0; k < files.length; k++) answer[k] = head[k] + number[k] + tail[k];
            break;
        }
    }
    return answer;
}

//console.log(solution(['foo9.txt', 'foo010bar020.zip', 'F-15']));
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
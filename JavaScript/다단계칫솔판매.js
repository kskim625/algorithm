function solution(enroll, referral, seller, amount) {
    const answer = [];
    const tree = {};
    for (let i = 0; i < enroll.length; i++) {
        tree[enroll[i]] = [referral[i], 0];
    }
    for (let j = 0; j < seller.length; j++) {
        let s = seller[j];
        let pay = Math.floor(amount[j] * 10);
        let amt = amount[j] * 100;
        while (s !== '-') {
            tree[s][1] += amt - pay;
            s = tree[s][0];
            amt = pay;
            pay = Math.floor(amt / 10);
            if (amt === 0) break;
        }
    }
    const result = Object.values(tree);
    for (let k = 0; k < result.length; k++) {
        answer.push(result[k][1]);
    }
    return answer;
}

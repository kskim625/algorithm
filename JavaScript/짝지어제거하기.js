function solution(s) {
    const basket = [];
    for (let i = 0; i < s.length; i++) {
        basket.push(s[i]);
        if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
            basket.splice(basket.length - 2, 2);
        }
    }
    return basket.length === 0 ? 1 : 0;
}

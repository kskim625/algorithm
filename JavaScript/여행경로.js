const getOrder = (tickets, currentLocation, visited, order, answer) => {
    if (order.length - 1 === tickets.length) return;
    
    for (let i = 0; i < tickets.length; i++) {
        if (visited.includes(i)) continue;
        if (tickets[i][0] === currentLocation) {
            const v = JSON.parse(JSON.stringify(visited));
            const o = JSON.parse(JSON.stringify(order));
            v.push(i);
            o.push(currentLocation);
            if (tickets.length === o.length) {
                o.push(tickets[i][1]);
                answer.push(o)
                break;
            }
            getOrder(tickets, tickets[i][1], v, o, answer);
        }
    }
}

function solution(tickets) {
    const startLocation = 'ICN';
    const answer = [];
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === startLocation) {
            getOrder(tickets, tickets[i][1], [i], [startLocation], answer);
        }
    }
    return answer.sort()[0];
}

function solution(tickets) {
    var answer = [];

    tickets.sort();
    let ticket;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === 'ICN') {
            ticket = tickets.slice();
            ticket.splice(i, 1);
            answer.push(dfs(['ICN'], tickets.slice(), ticket, tickets[i]));
        }
    }
    console.log(answer);
    answer.sort();
    for (let j = 0; j < answer.length; j++) if (answer[j].length === tickets.length + 1) return answer[j];
}

function dfs(answer, tickets, ticket, current) {
    if (ticket.length === 0) {
        return answer.push(current[1]);
    }

    let temp = [];
    for (let i = 0; i < ticket.length; i++) {
        let t = [];
        if (current[1] === ticket[i][0]){
            answer.push(current[1]);
            for (let j = 0; j < ticket.length; j++) if (j !== i) t.push(ticket[j]);
            temp = dfs(answer, tickets, t, ticket[i]);
        }
        if (temp.length === tickets.length + 1) return temp;
    }
    console.log(temp, answer)
    return temp;
}

//console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
console.log(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]));
 //                          x                x               x               x                 x               x                x          
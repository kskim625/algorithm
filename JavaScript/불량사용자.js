const getAnswer = (uid, bid, visited) => {
    if (bid.length === 0) {
        if (!visited.includes(JSON.stringify(uid))){
            visited.push(JSON.stringify(uid));
            return 1;
        } else {
            return 0;
        }
    }
    let count = 0;
    for (let i = 0; i < uid.length; i++) {
        for (let j = 0; j < bid.length; j++) {
            if (uid[i].length !== bid[j].length) continue;
            let equal = true;
            for (let k = 0; k < uid[i].length; k++) {
                if (bid[j][k] !== '*' && uid[i][k] !== bid[j][k]) {
                    equal = false;
                    break;
                }
            }
            if (!equal) continue;
            const nextUid = uid.slice();
            const nextBid = bid.slice();
            nextUid.splice(i, 1);
            nextBid.splice(j, 1);
            if (!visited.includes(JSON.stringify(nextUid) + JSON.stringify(nextBid))) {
                visited.push(JSON.stringify(nextUid) + JSON.stringify(nextBid));
                count += getAnswer(nextUid, nextBid, visited);
            }
        }
    }
    return count;
}

function solution(user_id, banned_id) {
    return getAnswer(user_id, banned_id, []);
}

//console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]))
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]))
//console.log(solution(["aaaaaaaa", "bbbbbbbb", "cccccccc", "dddddddd", "eeeeeeee", "ffffffff", "gggggggg", "hhhhhhhh"], ["********", "********", "********", "********", "********", "********", "********", "********"]))
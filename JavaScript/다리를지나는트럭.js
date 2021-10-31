function solution(bridge_length, weight, truck_weights) {
    let answer = 0, w = 0;
    const length = truck_weights.length, onBridge = [], onBridgeTime = [], arrived = [];
    while (arrived.length < length) {
        for (let i = 0; i < onBridgeTime.length; i++) {
            onBridgeTime[i] += 1;
            if (onBridgeTime[i] === bridge_length) {
                w -= onBridge[0];
                arrived.push(onBridge.shift());
                onBridgeTime.shift();
                i--;
            }
        }
        if (w + truck_weights[0] <= weight) {
            w += truck_weights[0];
            onBridge.push(truck_weights.shift());
            onBridgeTime.push(0);
        }
        answer += 1;
    }
    return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
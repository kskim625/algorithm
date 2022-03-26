function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    let time = 0;
    const cache = [];
    for (let i = 0; i < cities.length; i++) {
        if (cache.includes(cities[i].toLowerCase())) {
            time += 1;
            const currentlyUsed = cache.splice(cache.indexOf(cities[i].toLowerCase()), 1)[0];
            cache.push(currentlyUsed.toLowerCase());
        } else {
            time += 5;
            if (cache.length === cacheSize) cache.shift();
            cache.push(cities[i].toLowerCase());
        }
    }
    return time;
}

// console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
// console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
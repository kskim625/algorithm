def solution(n, works):
    if n >= sum(works):
        return 0
    
    answer = 0
    
    import heapq
    h = []
    for work in works:
        heapq.heappush(h, -work)
    
    for i in range(n):
        value = heapq.heappop(h)
        value += 1
        heapq.heappush(h, value)
    
    for j in range(len(h)):
        h_value = heapq.heappop(h)
        answer += h_value * h_value
    
    return answer
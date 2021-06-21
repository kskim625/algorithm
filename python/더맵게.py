import heapq

def solution(scoville, K):
    a = []
    for v in scoville:
        heapq.heappush(a, v)
    answer = 0
    count = 0
    s = False
    while len(a) > 1:
        answer = heapq.heappop(a) + heapq.heappop(a)*2
        heapq.heappush(a, answer)
        count += 1
        if a[0] >= K:
            s = True
            break
    if not s:
        return -1
    return count

print(solution([1, 2, 3, 9, 10, 12], 12))
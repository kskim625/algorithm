import heapq
def solution(operations):
    answer = []

    a = []
    for i in range(len(operations)):
        order = operations.pop(0)
        if order[0] == 'I':
            heapq.heappush(a, int(order[2:len(order)]))
        elif order == 'D 1' and len(a) > 0:
            a.remove(max(a))
        elif order == 'D -1' and len(a) > 0:
            heapq.heappop(a)
    
    if a == []:
        return [0, 0]
    else:
        return [max(a), min(a)]

print(solution(["I 16","D 1"]))
print(solution(["I 7","I 5","I 5","D 1"]))
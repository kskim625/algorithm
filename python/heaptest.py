import heapq

def heapsort(iterable):
    h = []
    result = []
    for value in iterable:
        heapq.heappush(h, value)
    print(h)
    for i in range(len(h)):
        result.append(heapq.heappop(h))
        print(result)
    return result

result = heapsort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])
#print(result)

def heapsort_reverse(iterable):
    h = []
    result = []
    for value in iterable:
        heapq.heappush(h, -value)
    print(h)
    for i in range(len(h)):
        result.append(-heapq.heappop(h))
        print(result)
    return result
result = heapsort_reverse([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])
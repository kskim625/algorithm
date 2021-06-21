def drawgraph(roads, trap, graph):
    for i in range(len(roads)):
        x, y, z = map(int, roads[i])
        graph[x][y] = z
    return graph

def drawroads(roads, trap):
    for i in range(len(roads)):
        x, y, z = map(int, roads[i])
        if x != trap and y != trap:
            continue
        else:
            roads[i] = [y, x, z]
    return roads

def solution(n, start, end, roads, traps):
    answer = 0
    inf = int(10e9)
    graph = [[inf] * (n + 1) for _ in range(n + 1)]
    for a in range(1, n+1):
        for b in range(1, n+1):
            if a == b:
                graph[a][b] = 0

    from collections import deque
    q = deque()
    s = []
    s.append(start)
    
    while True:
        if not q:
            for i in range(len(roads)):
                if roads[i][0] in s and roads[i] not in q:
                    q.append(roads[i])
        if not q:
            break
        s = []
        x, y, z = map(int, q.popleft())
        if graph[x][y] == inf:
            graph[x][y] = z
        else:
            for p in range(1, n+1):
                graph[x][y] = min(graph[x][y], z+graph[p][y])
        print(graph)
        if y in traps and not q:
            roads = drawroads(roads, y)
            s.append(x)
        if graph[start][end] != inf:
            return graph[start][end]
        s.append(y)

    for k in range(1, n+1):
        for a in range(1, n+1):
            for b in range(1, n+1):
                graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

    return graph[start][end]

print(solution(3, 1, 3, [[1, 2, 2], [3, 2, 3]], [2]))
print(solution(4, 1, 4, [[1, 2, 1], [3, 2, 1], [2, 4, 1]], [2, 3]))
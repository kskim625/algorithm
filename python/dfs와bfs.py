n, m, v = map(int, input().split())
graph = [[0]*(n+1) for a in range(n+1)]
visited = [False] * (n+1)
for i in range(m):
    x, y = map(int, input().split())
    graph[x][y] = 1
    graph[y][x] = 1

answer = []

def dfs(v):
    visited[v] = True
    print(v, end=' ')
    for i in range(1, n+1):
        if graph[v][i] == 1 and not visited[i]:
            dfs(i)

from collections import deque
def bfs(v):
    visited[v] = False
    queue = deque()
    queue.append(v)
    while queue:
        x = queue.popleft()
        print(x, end=' ')
        for i in range(1, n+1):
            if visited[i] and graph[x][i] == 1:
                queue.append(i)
                visited[i] = False

dfs(v)
print()
bfs(v)
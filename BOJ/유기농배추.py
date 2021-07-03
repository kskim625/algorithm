t = int(input())
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
# def bfs(graph, x, y, m, n):
#     q = [[x, y]]
#     while q:
#         pos = q.pop(0)
#         graph[pos[0]][pos[1]] = 2
#         if pos[0] > 0 and graph[pos[0]-1][pos[1]] == 1:
#             q.append([pos[0]-1, pos[1]])
#         if pos[0] < n-1 and graph[pos[0]+1][pos[1]] == 1:
#             q.append([pos[0]+1, pos[1]])
#         if pos[1] > 0 and graph[pos[0]][pos[1]-1] == 1:
#             q.append([pos[0], pos[1]-1])
#         if pos[1] < m-1 and graph[pos[0]][pos[1]+1] == 1:
#             q.append([pos[0], pos[1]+1])

def dfs(graph, x, y, m, n):
    if x < 0 or y < 0 or x >= n or y >= m:
        return
    if graph[x][y] != 1:
        return
    graph[x][y] = 2
    dfs(graph, x+1, y, m, n)
    dfs(graph, x-1, y, m, n)
    dfs(graph, x, y+1, m, n)
    dfs(graph, x, y-1, m, n)

for case in range(t):
    answer = 0
    m, n, k = map(int, input().split(' '))
    graph = [[0] * m for _ in range(n)]
    
    for i in range(k):
        x, y = map(int, input().split(' '))
        graph[y][x] = 1
    
    for j in range(m):
        for k in range(n):
            if graph[k][j] == 1:
                dfs(graph, k, j, m, n)
                answer += 1
    print(answer)
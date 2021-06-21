n, m = map(int, input().split(' '))
d = []
visited = []
for a in range(n):
    d.append(list(map(int, input().split(' '))))
    visited.append([False]*m)

def dfs(x, y, l):
    visited[x][y] = True
    if d[x][y] == 1:
        l.append('1')
        if x > 0 and visited[x-1][y] == False:
            dfs(x-1, y, l)
        if x < n-1 and visited[x+1][y] == False:
            dfs(x+1, y, l)
        if y > 0 and visited[x][y-1] == False:
            dfs(x, y-1, l)
        if y < m-1 and visited[x][y+1] == False:
            dfs(x, y+1, l)

def solution():
    l = 0
    count = 0
    for i in range(len(d)):
        for j in range(len(d[i])):
            if visited[i][j] == False and d[i][j] == 1:
                count += 1
            length = []
            if visited[i][j] == False:
                dfs(i, j, length)
            l = max(l, len(length))
    print(count)
    print(l)

solution()
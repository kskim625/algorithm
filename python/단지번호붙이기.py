n = int(input())
d = []
visited = []
temp = ''

for i in range(n):
    d.append([])
    visited.append([])
    temp = input()
    for j in range(len(temp)):
        d[i].append(int(temp[j]))
        visited[i].append(False)
    

def dfs(d, ap, x, y, c):

    if d[x][y] == 1 and visited[x][y] == False:
        d[x][y] = ap
        c.append('1')
        visited[x][y] = True
        if x > 0 and visited[x-1][y] == False:
            dfs(d, ap, x-1, y, c)
        if x < n-1 and visited[x+1][y] == False:
            dfs(d, ap, x+1, y, c)
        if y > 0 and visited[x][y-1] == False:
            dfs(d, ap, x, y-1, c)
        if y < n-1 and visited[x][y+1] == False:
            dfs(d, ap, x, y+1, c)

def solution(d):

    ap = 0
    answer = []
    for i in range(n):
        for j in range(n):
            if d[i][j] == 1 and visited[i][j] == False:
                c = []
                ap += 1
                dfs(d, ap, i, j, c)
                answer.append(len(c))
                
    print(ap)
    answer = sorted(answer)
    for i in range(len(answer)):
        print(answer[i])
    
solution(d)
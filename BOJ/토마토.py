m, n = map(int, input().split(' '))
tomato = []
for i in range(n):
    tomato.append(list(map(int, input().split(' '))))

from collections import deque
def solution():
    q = deque([])
    for i in range(n):
        for j in range(m):
            if tomato[i][j] == 1:
                q.append([i, j, 0])
    while q:
        pos = q.popleft()
        if pos[0] > 0 and tomato[pos[0]-1][pos[1]] == 0:
            tomato[pos[0]-1][pos[1]] = 1
            q.append([pos[0]-1, pos[1], pos[2]+1])
        if pos[0] < n-1 and tomato[pos[0]+1][pos[1]] == 0:
            tomato[pos[0]+1][pos[1]] = 1
            q.append([pos[0]+1, pos[1], pos[2]+1])
        if pos[1] > 0 and tomato[pos[0]][pos[1]-1] == 0:
            tomato[pos[0]][pos[1]-1] = 1
            q.append([pos[0], pos[1]-1, pos[2]+1])
        if pos[1] < m-1 and tomato[pos[0]][pos[1]+1] == 0:
            tomato[pos[0]][pos[1]+1] = 1
            q.append([pos[0], pos[1]+1, pos[2]+1])

    for x in range(n):
        for y in range(m):
            if tomato[x][y] == 0:
                return -1
    return pos[2]

print(solution())
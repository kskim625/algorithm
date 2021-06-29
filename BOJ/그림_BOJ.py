n, m = map(int, input().split(' '))
pic = []
for i in range(n):
    pic.append(list(map(int, input().split(' '))))

def bfs(x, y):
    q = []
    q.append([x, y])
    area = 0
    while q:
        pos = q.pop(0)
        pic[pos[0]][pos[1]] = 2
        if pos[0] < n-1 and pic[pos[0]+1][pos[1]] == 1 and [pos[0]+1, pos[1]] not in q:
            q.append([pos[0]+1, pos[1]])
        if pos[0] > 0 and pic[pos[0]-1][pos[1]] == 1 and [pos[0]-1, pos[1]] not in q:
            q.append([pos[0]-1, pos[1]])
        if pos[1] < m-1 and pic[pos[0]][pos[1]+1] == 1 and [pos[0], pos[1]+1] not in q:
            q.append([pos[0], pos[1]+1])
        if pos[1] > 0 and pic[pos[0]][pos[1]-1] == 1 and [pos[0], pos[1]-1] not in q:
            q.append([pos[0], pos[1]-1])
        area += 1
    return area

def solution():
    area, count = 0, 0
    
    for i in range(n):
        for j in range(m):
            if pic[i][j] == 1:
                area_temp = bfs(i, j)
                if area < area_temp:
                    area = area_temp
                count += 1
    print(count)
    print(area)

solution()
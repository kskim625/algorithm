def solution(maps):
    answer = 0
    
    q = []
    q.append([0, 0])
    
    n = len(maps)-1
    m = len(maps[n])-1
    
    while q:
        pos = q.pop(0)
        if pos[0] > 0 and maps[pos[0]-1][pos[1]] == 1:
            maps[pos[0]-1][pos[1]] = maps[pos[0]][pos[1]]+1
            q.append([pos[0]-1, pos[1]])
        if pos[0] < n and maps[pos[0]+1][pos[1]] == 1:
            maps[pos[0]+1][pos[1]] = maps[pos[0]][pos[1]]+1
            q.append([pos[0]+1, pos[1]])
        if pos[1] > 0 and maps[pos[0]][pos[1]-1] == 1:
            maps[pos[0]][pos[1]-1] = maps[pos[0]][pos[1]]+1
            q.append([pos[0], pos[1]-1])
        if pos[1] < m and maps[pos[0]][pos[1]+1] == 1:
            maps[pos[0]][pos[1]+1] = maps[pos[0]][pos[1]]+1
            q.append([pos[0], pos[1]+1])
            
    if maps[n][m] == 1:
        return -1
    return maps[n][m]

print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
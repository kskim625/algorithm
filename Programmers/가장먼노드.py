#시간 초과
def solution(n, edge):
    answer = 0
    
    distance = [[int(1e9)] * (n+1) for _ in range(n+1)]

    for x in range(1, n+1):
        for y in range(1, n+1):
            if x == y:
                distance[x][y] = 0

    for i in range(len(edge)):
        distance[edge[i][0]][edge[i][1]] = 1
    
    for k in range(1, n+1):
        for a in range(1, n+1):
            for b in range(1, n+1):
                distance[a][b] = min(distance[a][b], distance[a][k] + distance[k][b])

    maxnum = max(distance[1][1:])
    for j in range(1, n+1):
        if distance[1][j] == maxnum:
            answer += 1

    return answer

solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])
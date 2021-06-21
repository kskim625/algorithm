def solution(m, n, puddles):
    map = [[0]*(m+1) for i in range(n+1)]
    map[1][1] = 1
    puddles.append([1, 1])
    for j in range(1, n+1):
        for i in range(1, m+1):
            if [i, j] not in puddles:
                map[j][i] = (map[j-1][i] + map[j][i-1]) % 1000000007
    return map[n][m]

print(solution(4, 4, [[1, 4], [4, 1]]))
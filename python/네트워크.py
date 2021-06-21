def dfs(computers, visited, answer, x):
    if not visited[x]:
        visited[x] = True
        for i in range(len(computers)):
            if x == i:
                continue
            if computers[x][i] == 1 and not visited[i]:
                dfs(computers, visited, answer+1, i)
    else:
        return 0

    return 1

def solution(n, computers):
    answer = 0
    visited = [False] * len(computers)

    for i in range(len(computers)):   
        answer += dfs(computers, visited, answer, i)
        if False not in visited:
            break

    return answer

#print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
#print(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))
print(solution(4, [[1, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 1, 1]]))
#print(solution(4, [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]]))
#print(solution(4, [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]))
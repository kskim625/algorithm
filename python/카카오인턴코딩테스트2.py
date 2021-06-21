def dfs(io, jo, i, j, place, visited):

    if abs(io-i)+abs(jo-j) > 2:
        return False
    if place[i][j] == 'P' and abs(io-i)+abs(jo-j) <= 2:
        if i != io or j != jo:
            return True
    if not visited[i][j]:
        visited[i][j] = True
        if i < 4 and place[i+1][j] != 'X':
            if dfs(io, jo, i+1, j, place, visited):
                return True
        if j < 4 and place[i][j+1] != 'X':
            if dfs(io, jo, i, j+1, place, visited):
                return True
        if i > 0 and place[i-1][j] != 'X':
            if dfs(io, jo, i-1, j, place, visited):
                return True
        if j > 0 and place[i][j-1] != 'X':
            if dfs(io, jo, i, j-1, place, visited):
                return True
        if i < 4 and j < 4 and place[i+1][j] == 'O' and place[i][j+1] == 'O' and place[i+1][j+1] != 'X':
            if dfs(io, jo, i+1, j+1, place, visited):
                return True
        if i > 0 and j < 4 and place[i-1][j] == 'O' and place[i][j+1] == 'O' and place[i-1][j+1] != 'X':
            if dfs(io, jo, i-1, j+1, place, visited):
                return True
        if i < 4 and j > 0 and place[i+1][j] == 'O' and place[i][j-1] == 'O' and place[i+1][j-1] != 'X':
            if dfs(io, jo, i+1, j-1, place, visited):
                return True
        if i > 0 and j > 0 and place[i-1][j] == 'O' and place[i][j-1] == 'O' and place[i-1][j-1] != 'X':
            if dfs(io, jo, i-1, j-1, place, visited):
                return True
    return False

def check(place):

    for i in range(5):
        for j in range(5):
            if place[i][j] == 'P':
                visited = [[False] * 5 for _ in range(5)]
                if dfs(i, j, i, j, place, visited):
                    return True
    return False

def solution(places):
    answer = []
    n = 5

    for i in range(n):
        if check(places[i]):
            answer.append(0)
        else:
            answer.append(1)

    return answer

print(check(["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"]))
#print(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPXX", "OXXXP", "POOXX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))
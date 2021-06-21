#unsolved
def dfs(board, one, two, answer, v):
    
    if one == [len(board)-1, len(board)-1] or two == [len(board)-1, len(board)-1]:
        return answer

    v.append([one, two])
    print(v)
    if one[0] < len(board)-1 and two[0] < len(board)-1 and board[one[0]+1][one[1]] == 0 and board[two[0]+1][two[1]] == 0:
        if [[one[0]+1, one[1]], [two[0]+1, two[1]]] not in v:
            answer = min(answer, dfs(board, [one[0]+1, one[1]], [two[0]+1, two[1]], answer, v))
        if [[two[0]+1, two[1]], two] not in v:
            answer = min(answer, dfs(board, [two[0]+1, two[1]], two, answer, v))
        if [one, [one[0]+1, one[1]]] not in v:
            answer = min(answer, dfs(board, one, [one[0]+1, one[1]], answer, v))
    if one[0] > 0 and two[0] > 0 and board[one[0]-1][one[1]] == 0 and board[two[0]-1][two[1]] == 0:
        if [[one[0]-1, one[1]], [two[0]-1, two[1]]] not in v:
            answer = min(answer, dfs(board, [one[0]-1, one[1]], [two[0]-1, two[1]], answer, v))
        if [[two[0]-1, two[1]], two] not in v:
            answer = min(answer, dfs(board, [two[0]-1, two[1]], two, answer, v))
        if [one, [one[0]-1, one[1]]] not in v:
            answer = min(answer, dfs(board, one, [one[0]-1, one[1]], answer, v))
    if two[1] < one[1] and one[1] < len(board)-1 and board[one[0]][one[1]+1] == 0:
        if [[one[0]+1, one[1]+1], one] not in v:
            answer = min(answer, dfs(board, [one[0]+1, one[1]+1], one, answer, v))
        if [one, [one[0]+1, one[1]+1]] not in v:
            answer = min(answer, dfs(board, one, [one[0]+1, one[1]+1], answer, v))
    if two[0] < one[0] and two[0] > 0 and board[two[0]-1][two[1]] == 0:
        if [two, [two[0]-1, two[1]]] not in v:
            answer = min(answer, dfs(board, two, [two[0]-1, two[1]], answer, v))
        if [[two[0]-1, two[1]], two] not in v:
            answer = min(answer, dfs(board, [two[0]-1, two[1]], two, answer, v))
    if one[1] < len(board)-1 and two[1] < len(board)-1 and board[one[0]][one[1]+1] == 0 and board[two[0]][two[1]+1] == 0:
        if [[one[0], one[1]+1], [two[0], two[1]+1]] not in v:
            answer = min(answer, dfs(board, [one[0], one[1]+1], [two[0], two[1]+1], answer, v))
    
    
    return answer

def solution(board):
    answer = 0

    one = [0,0]
    two = [0,1]
    v = []
    answer = dfs(board, one, two, int(1e9), v)

    return answer

print(solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]))
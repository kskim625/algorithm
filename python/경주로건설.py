inf = 1000000000 #unsolved

def dp(board, dir, x, y, cost):
    
    board[x][y] = min(board[x][y], cost)
    if x == len(board)-1 and y == len(board)-1:
        return

    if dir == 'R':
        if y < len(board)-1 and board[x][y+1] != 1 and cost+100 <= board[x][y+1]:
            dp(board, dir, x, y+1, cost+100)
        if x < len(board)-1 and board[x+1][y] != 1 and cost+600 <= board[x+1][y]:
            dp(board, 'D', x+1, y, cost+600)
        if x > 0 and board[x-1][y] != 1 and cost+600 <= board[x-1][y]:
            dp(board, 'U', x-1, y, cost+600)
    if dir == 'L':
        if y > 0 and board[x][y-1] != 1 and cost+100 <= board[x][y-1]:
            dp(board, dir, x, y-1, cost+100)
        if x < len(board)-1 and board[x+1][y] != 1 and cost+600 <= board[x+1][y]:
            dp(board, 'D', x+1, y, cost+600)
        if x > 0 and board[x-1][y] != 1 and cost+600 <= board[x-1][y]:
            dp(board, 'U', x-1, y, cost+600)
    if dir == 'U':
        if x > 0 and board[x-1][y] != 1 and cost+100 <= board[x-1][y]:
            dp(board, dir, x-1, y, cost+100)
        if y < len(board)-1 and board[x][y+1] != 1 and cost+600 <= board[x][y+1]:
            dp(board, 'R', x, y+1, cost+600)
        if y > 0 and board[x][y-1] != 1 and cost+600 <= board[x][y-1]:
            dp(board, 'L', x, y-1, cost+600)
    if dir == 'D':
        if x < len(board)-1 and board[x+1][y] != 1 and cost+100 <= board[x+1][y]:
            dp(board, dir, x+1, y, cost+100)
        if y < len(board)-1 and board[x][y+1] != 1 and cost+600 <= board[x][y+1]:
            dp(board, 'R', x, y+1, cost+600)
        if y > 0 and board[x][y-1] != 1 and cost+600 <= board[x][y-1]:
            dp(board, 'L', x, y-1, cost+600)
    return board[len(board)-1][len(board)-1]

def solution(board):
    answer = 0
    for a in range(len(board)):
        for b in range(len(board)):
            if board[a][b] != 1:
                board[a][b] = inf
    
    answer = dp(board, 'R', 0, 0, 0)
    answer = dp(board, 'D', 0, 0, 0)
    print(board)

    return answer

#print(solution([[0,0,0],[0,0,0],[0,0,0]]))
#print(solution([[0,0,1,0],[0,0,0,0],[0,1,0,1],[1,0,0,0]]))
#print(solution([[0, 0, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 1, 1], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1], [0, 1, 0, 0, 1, 0, 0, 0, 1, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0]]))
print(solution([[0, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 1, 1, 1, 1],
[0, 1, 0, 1, 1, 1, 1, 1, 1],
[0, 1, 0, 0, 0, 1, 1, 1, 1],
[0, 1, 1, 1, 0, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 0]]))
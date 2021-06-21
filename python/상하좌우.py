# def solution(n, plan):
    
#     answer = [1,1]

#     for i in range(len(plan)):
#         if plan[i] == 'R' and answer[1] < n:
#             answer[1] += 1
#         elif plan[i] == 'L' and answer[1] > 1:
#             answer[1] -= 1
#         elif plan[i] == 'U' and answer[0] > 1:
#             answer[0] -= 1
#         elif plan[i] == 'D' and answer[0] < n:
#             answer[0] += 1

#     print(str(answer[0]) + ' ' + str(answer[1]))
#     return answer

def solution(n, plan):
    
    x, y = 1, 1

    #LRUD, dx=상하, dy=좌우
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    move_types = ['L', 'R', 'U', 'D']

    for i in plan:
        for j in range(len(move_types)):
            if i == move_types[j]:
                nx = x + dx[j]
                ny = y + dy[j]
        if nx > n or nx < 1 or ny > n or ny < 1:
            continue
        x = nx
        y = ny
        
    print(x, y)
    
    return x

solution(5, 'R R R U D D')
def dp(t, height, memo):

    for i in range(len(memo[height])):
        if i == 0:
            memo[height][i] = memo[height-1][i] + t[height][i]
        elif i == len(memo[height])-1:
            memo[height][i] = memo[height-1][i-1] + t[height][i]
        else:
            memo[height][i] = max(memo[height-1][i-1], memo[height-1][i]) + t[height][i]
            
    if height+1 == len(t):
        return max(memo[height])
        
    answer = dp(t, height+1, memo)

    return answer

def solution(triangle):

    if len(triangle) == 1:
        return triangle[0][0]

    memo = []
    for i in range(len(triangle)):
        memo.append([0] * (i+1))
    memo[0][0] = triangle[0][0]
    memo[1][0] = memo[0][0] + triangle[1][0]
    memo[1][1] = memo[0][0] + triangle[1][1]

    return dp(triangle, 2, memo)

print(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))
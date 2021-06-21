def solution(answer, position, index, dp, m):

    if position == m:
        return answer
    answer += dp[index][position]

    temp = 0
    if index > 0:
        temp = max(temp, solution(answer, position + 1, index - 1, dp, m))
    temp = max(temp, solution(answer, position + 1, index, dp, m))
    if index < len(dp) - 1:
        temp = max(temp, solution(answer, position + 1, index + 1, dp, m))
    return temp


for tc in range(int(input())):
    n, m = map(int, input().split())
    array = list(map(int, input().split()))
    dp = []
    index = 0
    for i in range(n):
        dp.append(array[index:index+m])
        index += m

    answer = [0] * n
    for j in range(n):
        answer[j] = solution(0, 0, j, dp, m)
    print(max(answer))
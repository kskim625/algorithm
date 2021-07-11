def solution(n, money):
    answer = 0
    
    dp = [0] * (n+1)
    dp[0] = 1
    for i in range(len(money)):
        for j in range(money[i], n+1):
            if j >= money[i]:
                dp[j] += dp[j-money[i]]
                
    return dp[n]%1000000007
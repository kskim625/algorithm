n = int(input())
memo = [0] * (n+1)

def dp(n):
    if n == 1 or n == 2:
        return n
        
    memo[1], memo[2] = 1, 2
    for i in range(3, n+1):
        memo[i] = memo[i-2] + memo[i-1]

    return memo[n] % 10007

print(dp(n))
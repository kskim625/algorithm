n = int(input())
soldier = list(map(int, input().split(' ')))

def dp(s, c):
    if s == sorted(s, reverse=True):
        return c

    answer = 2000
    for i in range(len(s)):
        if i < len(s):
            answer = min(answer, dp(s[:i] + s[i+1:], c+1))
    return answer

print(dp(soldier, 0))
t = int(input())
n = []
for i in range(t):
    n.append(int(input()))

def dp(num):
    if num == 0:
        return 1
    elif num < 0:
        return 0
    
    count = 0
    count += dp(num-1)
    count += dp(num-2)
    count += dp(num-3)

    return count

def solution(n):
    answer = 0
    answer = dp(n)
    return answer

for j in range(t):
    print(solution(n[j]))

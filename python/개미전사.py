n = int(input())
k = list(map(int, input().split(' ')))
d = [0] * n
d[0] = k[0]
d[1] = max(k[0], k[1])

def dp(x):
    if x == 0:
        return d[0]
    elif x == 1:
        return d[1]

    if d[x] != 0:
        return d[x]
    
    d[x] = max(dp(x-1), dp(x-2) + k[x])

    return d[x]

print(dp(n-1))

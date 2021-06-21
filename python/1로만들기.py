x = int(input())
d = [0] * 31
d[1] = 0
d[2] = 1

def dp(x):
    if x == 1:
        return 0
    elif x == 2 or x == 3 or x == 5:
        return 1
    
    if d[x] != 0:
        return d[x]
    
    d[x] = dp(x-1) + 1
    if x % 2 == 0:
        d[x] = min(d[x], dp(int(x/2)) + 1)
    if x % 3 == 0:
        d[x] = min(d[x], dp(int(x/3)) + 1)
    if x % 5 == 0:
        d[x] = min(d[x], dp(int(x/5)) + 1)
    return d[x]

print(dp(x))
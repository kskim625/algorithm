x = int(input())
d = [0] * (x+1)

def dp(x):
    if x == 1:
        return 0
    elif x == 2 or x == 3:
        return 1

    for i in range(2, x+1):
        d[i] = d[i-1] + 1
        if i % 2 == 0:
            d[i] = min(d[i//2] + 1, d[i])
        if i % 3 == 0:
            d[i] = min(d[i//3] + 1, d[i])

    return d[x]

print(dp(x))
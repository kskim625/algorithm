n, w = map(int, input().split(' '))
s = []
for i in range(n):
    s.append(int(input()))

purchased = False
coin = 0
for j in range(n-1):
    if not purchased and s[j] < s[j+1]:
        purchased = True
        coin = w // s[j]
        w %= s[j]
    if purchased and s[j] > s[j+1]:
        purchased = False
        w += s[j] * coin
        coin = 0

if coin != 0:
    w += s[n-1]*coin
print(w)
n, k = map(int, input().split(' '))
d = [0] * n
for i in range(n):
    d[i] = int(input())

j = n-1
count = 0
while k != 0:
    if k >= d[j]:
        count += k // d[j]
        k %= d[j]
    else:
        j -= 1
    if k == 0:
        print(count)
        break
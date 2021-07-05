n, k, i = map(int, input().split(' '))
answer = 0
while k != i:
    n /= 2
    k = k // 2 + k % 2
    i = i // 2 + i % 2
    answer += 1
    if n == 1:
        break
if k == i:
    print(answer)
else:
    print(-1)
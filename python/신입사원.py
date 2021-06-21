# 시간초과
import sys
t = int(input())
for x in range(t):
    n = int(input())
    a = []
    for i in range(n):
        p, i = map(int, sys.stdin.readline().split())
        a.append(list([p, i]))
    nq = [False] * n
    for j in range(n):
        for k in range(n):
            if j == k:
                continue
            if a[j][0] > a[k][0] and a[j][1] > a[k][1]:
                nq[j] = True
    count = 0
    for k in range(len(nq)):
        if nq[k] == False:
            count += 1
    print(count)
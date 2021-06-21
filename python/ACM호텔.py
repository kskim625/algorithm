T = int(input())
case = []
for i in range(T):
    case.append(input().split(' '))

h, w, n = 0, 0, 0
for j in range(len(case)):
    h, w, n = int(case[j][0]), int(case[j][1]), int(case[j][2])
    w_temp = 1
    while n > h:
        n -= h
        w_temp += 1
    if w_temp < 10:
        print(str(n) + '0' + str(w_temp))
    else:
        print(str(n) + str(w_temp))
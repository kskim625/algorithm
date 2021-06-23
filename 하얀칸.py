li = []
for a in range(8):
    li.append(input())

count = 0
for i in range(8):
    if i % 2 == 0:  # 홀수 줄일 때 흰색 칸의 위치는 0, 2, 4, 6
        j = 0
    else:           # 짝수 줄일 때 흰색 칸의 위치는 1, 3, 5, 7
        j = 1
    while j < 8:
        if li[i][j] == 'F':
            count += 1
        j += 2
print(count)
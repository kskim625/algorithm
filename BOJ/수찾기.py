from sys import stdin, stdout
n = stdin.readline()
a = sorted(list(map(int, stdin.readline().split(' '))))
m = stdin.readline()
b = list(map(int, stdin.readline().split(' ')))

for num in b:
    left, right = 0, len(a)-1
    inA = False
    while left <= right:
        index = (left+right) // 2
        if num == a[index]:
            print(1)
            inA = True
            break
        elif num > a[index]:
            left = index+1
        elif num < a[index]:
            right = index-1
    if not inA:
        print(0)
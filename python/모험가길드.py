n = int(input())
a = list(map(int, input().split()))
count = 0
while a != []:
    for j in range(max(a)):
        a.remove(max(a))
    count += 1
print(count)
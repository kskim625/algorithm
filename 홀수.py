li = []
for i in range(7):
    x = int(input())
    if x % 2 == 1:
        li.append(x)
li = sorted(li)
if len(li) == 0:
    print(-1)
else:
    print(sum(li))
    print(li[0])

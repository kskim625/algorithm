n = int(input())
a = []
for i in range(n):
    a.append(int(input()))
a = sorted(a)

even = False
temp = 0
sum = 0
i = 0
while i < n and a[i] <= 0:
    if not even:
        even = True
        temp = a[i]
    else:
        even = False
        sum += temp*a[i]
        temp = 0
    i += 1
if even:
    sum += temp
    temp = 0
    even = False
i = n-1
while i >= 0 and a[i] > 0:
    if not even:
        even = True
        temp = a[i]
    else:
        if temp != 1 and a[i] != 1:
            sum += temp*a[i]
        else:
            sum = sum + temp + a[i]
        temp = 0
        even = False
    i -= 1
if even:
    sum += temp
print(sum)
n = int(input())
d = list(map(int, input().split(' ')))
x = sorted(d)

sum = x[0]
for i in range(1, len(x)):
    x[i] = x[i] + x[i-1]
    sum += x[i]

print(sum)
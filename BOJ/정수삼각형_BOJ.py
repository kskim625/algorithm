n = int(input())
triangle = []
for i in range(n):
    triangle.append(list(map(int, input().split(' '))))

for j in range(1, len(triangle)):
    for k in range(len(triangle[j])):
        if k == 0:
            triangle[j][k] += triangle[j-1][k]
        elif k == len(triangle[j])-1:
            triangle[j][k] += triangle[j-1][k-1]
        else:
            triangle[j][k] += max(triangle[j-1][k-1], triangle[j-1][k])

print(max(triangle[len(triangle)-1]))
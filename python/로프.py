n = int(input())
rope = []
for i in range(n):
    rope.append(int(input()))

rope = sorted(rope, reverse=True)
answer = rope[0]
for j in range(n-1):
    if answer < rope[j+1] * (j+2):
        answer = rope[j+1] * (j+2)
print(answer)
n = int(input())
str_n = str(n)
li = [0] * 10

for i in range(10):
    for j in range(len(str_n)):
        if int(str_n[j]) == i:
            li[i] += 1

li[6] = (li[6]+li[9]) // 2 + (li[6]+li[9]) % 2
li.pop(9)
print(max(li))
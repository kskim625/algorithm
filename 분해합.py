n = int(input())
n_temp = n
answer = 0
while n_temp != 0:
    n_temp -= 1
    n_str = str(n_temp)
    sum = 0
    for i in range(len(n_str)):
        sum += int(n_str[i])
    sum += int(n_str)
    if sum == n:
        answer = n_temp
print(answer)
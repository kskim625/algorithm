#unsolved
n = int(input())
maxnum = 320
while maxnum > 0:
    if n >= maxnum**2:
        break
    else:
        maxnum -= 1
answer_list = [0] * (maxnum+1)

x = maxnum
while x > 0:
    i = x
    n_temp = n
    while n_temp != 0:
        if i ** 2 <= n_temp:
            n_temp -= i ** 2
            answer_list[x] += 1
        else:
            i -= 1
    x -= 1

answer = 999999
for getanswer in range(1, len(answer_list)):
    if answer > answer_list[getanswer]:
        answer = answer_list[getanswer]
print(answer)
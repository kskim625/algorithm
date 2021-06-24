t = int(input())
for i in range(t):
    r, s = map(str, input().split(' '))
    answer = ''
    for j in range(len(s)):
        answer += s[j] * int(r)
    print(answer)
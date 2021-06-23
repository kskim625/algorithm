n = int(input())
li = []
for i in range(n):
    li.append(input())

answer = ''
for j in range(len(li[0])):
    letter_to_be_added = li[0][j]
    for k in range(n-1):
        if li[k][j] == li[k+1][j]:
            continue
        else:
            letter_to_be_added = '?'
            break
    answer += letter_to_be_added

print(answer)
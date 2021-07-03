n = int(input())
words = []
for i in range(n):
    words.append(str(input()))

answer = 0
for word in words:
    checker, j = [], 0
    group_word = True
    while j < len(word):
        if word[j] in checker:
            group_word = False
            break
        else:
            checker.append(word[j])
            while j < len(word)-1 and word[j+1] == word[j]:
                j += 1
        j += 1
    if group_word:
        answer += 1
print(answer)
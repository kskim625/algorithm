s = str(input())
height = 10
for i in range(1, len(s)):
    if s[i-1] == s[i]:
        height += 5
    else:
        height += 10
print(height)
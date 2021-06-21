def solution(s):
    
    if len(s) % 2 == 1:
        return 0
    
    stack = []
    for i in range(len(s)):
        if len(stack) < 1:
            stack.append(s[i])
        elif stack[-1] == s[i]:
            stack.pop()
        else:
            stack.append(s[i])
    
    if len(stack) > 0:
        return 0
    return 1

print(solution('baabaa'))
print(solution('cdcd'))
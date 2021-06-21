def solution(s):
    answer = True
    
    left = 0
    right = 0
    for i in range(len(s)):
        if s[i] == '(':
            left += 1
        else:
            right += 1
        if right > left:
            return False
    if left == right:
        return True
    return False

print(solution("()()"))
print(solution("(())()"))
print(solution(")()("))
print(solution("(()("))
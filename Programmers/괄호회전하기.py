def check(s):
    a, b, c = 0, 0, 0
    for i in range(len(s)):
        if s[i] == '(':
            if i < len(s)-1 and (s[i+1] == ']' or s[i+1] == '}'):
                return 0
            a += 1
        elif s[i] == '[':
            if i < len(s)-1 and (s[i+1] == ')' or s[i+1] == '}'):
                return 0
            b += 1
        elif s[i] == '{':
            if i < len(s)-1 and (s[i+1] == ']' or s[i+1] == ')'):
                return 0
            c += 1
        elif s[i] == ')':
            if a == 0:
                return 0
            a -= 1
        elif s[i] == ']':
            if b == 0:
                return 0
            b -= 1
        elif s[i] == '}':
            if c == 0:
                return 0
            c -= 1
    if a == 0 and b == 0 and c == 0:
        return 1
    return 0

def solution(s):
    answer = 0
    move_to_right = ''
    
    for i in range(len(s)):
        move_to_right = s[0]
        s = s[1:] + move_to_right
    
        answer += check(s)
        
    return answer
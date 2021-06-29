def solution(s):
    answer = ''
    space = True
    
    for i in range(len(s)):
        if space and s[i].isalpha():
            answer += s[i].upper()
            space = False
        elif space and s[i].isdigit():
            answer += s[i]
            space = False
        elif s[i] == ' ':
            answer += s[i]
            space = True
        elif s[i].isalpha():
            answer += s[i].lower()
            space = False
        elif s[i].isdigit():
            answer += s[i]
            space = False
    
    return answer
def solution(s):
    answer = ''
    
    temp_str = ''
    temp_li = []
    for i in range(len(s)):
        if s[i] != ' ':
            temp_str += s[i]
        else:
            temp_li.append(int(temp_str))
            temp_str = ''
    temp_li.append(int(temp_str))
    temp_li = sorted(temp_li)
    answer += str(str(temp_li[0]) + ' ' + str(temp_li[-1]))
    return answer

def solution_2(s):
    
    li = list(map(int, s.split(' ')))
    return str(min(li)) + ' ' + str(max(li))
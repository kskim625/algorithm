def solution(s):
    answer = ''

    temp = ''
    for i in range(len(s)):
        if s[i].isalpha():
            temp += s[i]
        if temp == 'zero':
            temp = ''
            answer += '0'
        elif temp == 'one':
            temp = ''
            answer += '1'
        elif temp == 'two':
            temp = ''
            answer += '2'
        elif temp == 'three':
            temp = ''
            answer += '3'
        elif temp == 'four':
            temp = ''
            answer += '4'
        elif temp == 'five':
            temp = ''
            answer += '5'
        elif temp == 'six':
            temp = ''
            answer += '6'
        elif temp == 'seven':
            temp = ''
            answer += '7'
        elif temp == 'eight':
            temp = ''
            answer += '8'
        elif temp == 'nine':
            temp = ''
            answer += '9'
        if s[i].isdigit():
            answer += str(s[i])
    return int(answer)

print(solution("one4seveneight"))
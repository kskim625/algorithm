def solution(s):
    
    temp = []

    for i in range(len(s)):
        temp.append(s[i])
    temp.sort()

    answer = ''
    digit_sum = 0

    for j in range(len(temp)):
        if temp[j].isalpha():
            answer += temp[j]
        else:
            digit_sum += int(temp[j])

    print(answer + str(digit_sum))

    return answer + str(digit_sum)

solution('AJKDLSI412K4JSJ9D')
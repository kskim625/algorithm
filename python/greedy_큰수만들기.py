def solution(number, k):
    
    answer = ''

    pos = 0
    i = 0
    while i < len(number) - 1:
        if pos + k < len(number) and answer + number[i] <= answer + number[i+1]:
            answer += number[i+1]
            pos = i+1
        i += 1

    answer += number[len(answer)+k:]

    print(answer)
        
    return answer

solution("1231234",3)
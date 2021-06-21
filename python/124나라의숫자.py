def solution(n):
    answer = ''
    append_num = ['4', '1', '2']
    while n != 0:
        answer = append_num[n%3] + answer
        if n % 3 == 0:
            n = int(n/3) - 1
        else:
            n = int(n/3)
    return answer

print(solution(11))
print(solution(12))
print(solution(13))
print(solution(14))
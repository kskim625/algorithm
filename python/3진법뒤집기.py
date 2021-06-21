def solution(n):
    answer = 0
    temp = ''
    if n < 3:
        return n
    
    while n != 0:
        temp = str(n%3) + temp
        n = int(n/3)
        if n < 3:
            temp = str(n) + temp
            break
    
    temp = temp[::-1]
    answer = int(temp[0])
    for i in range(len(temp)-1):
        answer = answer * 3 + int(temp[i+1])
    
    return answer

print(solution(1))
print(solution(2))
print(solution(3))
print(solution(4))
print(solution(5))
print(solution(6))
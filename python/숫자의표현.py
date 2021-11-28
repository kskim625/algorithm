def solution(n):
    answer = 0
    
    sum, i, index = 0, 1, 2
    while i < n:
        sum += i
        if sum >= n:
            i = index
            index += 1
            if sum == n:
                answer += 1
            sum = 0
        i += 1
    
    return answer+1
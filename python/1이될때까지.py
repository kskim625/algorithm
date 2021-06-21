def solution(n,k):
    answer = 0
    while n != 1:
        if n % k == 0:
            n = n / k
        else:
            n -= 1
        answer += 1
    print(answer)
    return answer

solution(25,5)
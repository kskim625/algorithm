def solution(n,a,b):
    answer = 1

    abigger = False
    if a > b:
        abigger = True

    i = n
    while i != 1:
        if abigger and a%2 == 0 and a-1 == b:
            return answer
        elif not abigger and b%2 == 0 and b-1 == a:
            return answer
        if a % 2 == 0:
            a /= 2
        else:
            a = a//2+1
        if b % 2 == 0:
            b /= 2
        else:
            b = b//2+1
        answer += 1
        i /= 2

print(solution(8, 4, 7))
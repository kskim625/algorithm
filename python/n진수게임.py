def solution(n, t, m, p):
    answer = ''

    from collections import deque
    queue = deque([0, 1])

    myturn = 1
    temp = ''
    i = 2
    while len(answer) != t:
        if not queue:
            x = i
            while x > n-1:
                queue.appendleft(x%n)
                x = x//n
            if x != 0:
                queue.appendleft(x)
            i += 1
        num = queue.popleft()
        if num == 10:
            temp = 'A'
        elif num == 11:
            temp = 'B'
        elif num == 12:
            temp = 'C'
        elif num == 13:
            temp = 'D'
        elif num == 14:
            temp = 'E'
        elif num == 15:
            temp = 'F'
        else:
            temp = num
        if myturn == p:
            answer += str(temp)
        myturn += 1
        if myturn == m+1:
            myturn = 1

    return answer

#print(solution(2, 4, 2, 1))
print(solution(16, 16, 57, 1))
#print(solution(16, 16, 2, 2))
def solution(n, arr1, arr2):

    answer = ['']*n
    secret_one, secret_two = 0, 0
    from collections import deque
    temp_two = deque([])
    temp = deque([])
    for i in range(n):
        secret_one, secret_two = arr1[i], arr2[i]
        while secret_one > 1:
            temp.appendleft(secret_one%2)
            secret_one = secret_one//2
        if secret_one != 0:
            temp.appendleft(secret_one)
        while len(temp) != n:
            temp.appendleft(0)
        while secret_two > 1:
            temp_two.appendleft(secret_two%2)
            secret_two = secret_two//2
        if secret_two != 0:
            temp_two.appendleft(secret_two)
        while len(temp_two) != n:
            temp_two.appendleft(0)
        for j in range(len(temp)):
            one = temp.popleft()
            two = temp_two.popleft()
            if one == 1 or two == 1:
                answer[i] += '#'
            else:
                answer[i] += ' '
    return answer

print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
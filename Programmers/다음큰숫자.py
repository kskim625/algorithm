def binary(n):
    n_binary = ''
    while n != 1:
        n_binary = str(n % 2) + n_binary
        n = n // 2
    return n_binary.count('1') + 1

def solution(n):
    
    n_count_one = binary(n)
    answer = n + 1
    while True:
        answer_count_one = binary(answer)
        if answer_count_one == n_count_one:
            return answer
        answer += 1
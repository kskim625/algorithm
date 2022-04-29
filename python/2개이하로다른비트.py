def solution(numbers):
    answer = []
    for n in numbers:
        binary = format(n, 'b')
        count = -1
        idx = len(binary) - 1
        while idx > -1 and binary[idx] != '0':
            idx -= 1
            count += 1
        if count > -1:
            answer.append(n + 2 ** count)
        else:
            answer.append(n + 1)
    return answer

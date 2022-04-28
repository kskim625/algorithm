#unsolved
def solution(numbers):
    answer = []
    for n in numbers:
        p = False
        tempN = n + 1
        count = -1
        while tempN > 1:
            tempN /= 2
            count += 1
        if p == True or tempN != 1:
            answer.append(n + 1)
        else:
            answer.append(n + 2 ** count)
    return answer
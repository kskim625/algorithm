def solution(numbers):
    answer = []

    j = 0
    while j < len(numbers):
        k = j + 1
        while k < len(numbers):
            if (numbers[j] + numbers[k]) not in answer:
                answer.append(numbers[j] + numbers[k])
            k += 1
        j += 1

    answer.sort()
    print(answer)
    return answer

solution([2,1,3,4,1])
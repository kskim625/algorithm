def solution(numbers):
    answer = ''

    temp = []
    for i in range(len(numbers)):
        if numbers[i] < 10:
            numbers[i] = str(numbers[i]) * 4
        #elif numbers[i] > 9:
            

    print(answer)
    return answer

solution([3,30,34,5,9])
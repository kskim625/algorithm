def solution(arr):
    answer = [arr[0]]
    
    i = 1
    while i < len(arr):
        if arr[i-1] != arr[i]:
            answer.append(arr[i])
        i += 1

    print(temp)
    return answer

solution([1,1,3,3,0,1,1])
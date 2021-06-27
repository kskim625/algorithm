def solution(arr):
    answer = 0
    x = max(arr)
    while True:
        for i in range(len(arr)):
            if x % arr[i] == 0:
                if i == len(arr)-1:
                    return x
            else:
                break
        x += 1
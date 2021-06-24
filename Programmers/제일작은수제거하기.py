def solution(arr):
    if len(arr) == 1:
        return [-1]
    smallest = max(arr)
    for i in range(len(arr)):
        if smallest > arr[i]:
            smallest = arr[i]
    arr.remove(smallest)
    return arr
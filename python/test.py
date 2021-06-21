def solution(arr):
    ans = [0] * 100
    for i in arr:
        ans[i] += 1
    answer = []
    for j in range(100):
        if ans[j] > 1:
            answer.append(ans[j])
    if len(answer) > 0:
        return answer
    return [-1]

print(solution([1,2,3,3,3,3,4,4]))
print(solution([3,2,4,4,2,5,2,5,5]))
print(solution([3,5,7,9,1]))
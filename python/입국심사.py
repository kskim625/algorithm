def binarysearch(n, answer_list, s, e, t):

    if s == e or s+2 == e:
        return max(answer_list)
    w = (s+e)//2
    sum = 0
    temp = 0
    for i in range(len(t)):
        temp = w // t[i]
        sum += temp
        answer_list[i] = temp * t[i]
    if sum > n:
        sum = binarysearch(n, answer_list, s, w, t)
    elif sum < n:
        sum = binarysearch(n, answer_list, w, e, t)
    return max(answer_list)

def solution(n, times):
    answer = 0
    times = sorted(times)
    answer_list = [0] * len(times)
    answer = binarysearch(n, answer_list, 0, max(times)*n, times)
    
    return answer

print(solution(2, [1, 2]))
#print(solution(3, [1, 2, 3]))
# def solution(stones, k):
#     answer = 0
#     i = 0
#     count = 0
#     while i < len(stones):
#         if stones[i] != 0:
#             stones[i] -= 1
#             count = 0
#         else:
#             count += 1
#         if count == k:
#             break
#         i += 1
#         if i == len(stones):
#             answer += 1
#             i = 0
#     print(answer)
#     return answer

def binarysearch(start, end, stones, k):

    if start == end:
        return start

    jump = start + (end - start) // 2
    count = 0
    for i in range(len(stones)):
        if stones[i] - jump <= 0:
            count += 1
        else:
            count = 0
        if count == k:
            return binarysearch(start, jump, stones, k)
    
    return binarysearch(jump+1, end, stones, k)


def solution(stones, k):
    answer = binarysearch(0, 200000000, stones, k)
    print(answer)
    return answer


solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)

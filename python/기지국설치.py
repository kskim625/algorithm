# efficiency unsolved
# def install(v, n, w):
#     v[n] = True
#     i = 1
#     while i <= w:
#         if n-i > 0:
#             v[n-i] = True
#         if n+i < len(v):
#             v[n+i] = True
#         i += 1
#     return v
        
# def solution(n, stations, w):
#     answer = 0

#     v = [False] * (n+1)
#     v[0] = True
#     for i in range(len(stations)):
#         v = install(v, stations[i], w)
    
#     count = 0
#     for j in range(len(v)):
#         if not v[j]:
#             count += 1
#         if count-1 == w or (count > 0 and v[j]):
#             install(v, j, w)
#             count = 0
#             answer += 1
#     if count != 0:
#         answer += 1

#     return answer

# unsolved
def solution(n, stations, w):
    answer = 0

    i, c = 1, 0
    while i <= n:
        if i+c not in stations:
            c += 1
        else:
            i += c+w+1
            c = 0
        if c-1 == w:
            if i+c in stations:
                i += c+w+1
            else:
                i += c+w
            c = 0
            answer += 1
    if c != 0:
        answer += 1

    return answer

print(solution(11, [4, 11], 1))
print(solution(16, [9], 2))
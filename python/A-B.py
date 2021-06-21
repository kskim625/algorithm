a, b = map(int, input().split(' '))

def dfs(a, b, count):
    if a == b:
        return count
    if a > b:
        return 1000000000
    count += 1
    answer = 1000000000
    answer = min(answer, dfs(a*2, b, count))
    answer = min(answer, dfs(int(str(a)+'1'), b, count))
    return answer

def solution(a, b):
    
    c = dfs(a, b, 0)
    if c != 1000000000:
        return c+1
    return -1

print(solution(a, b))
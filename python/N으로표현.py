def dp(n, number, x, c, a):
    if x == number:
        return c
    elif c > 8:
        return 9
    
    a = min(a, dp(n, number, x+n, c+1, a))
    a = min(a, dp(n, number, x-n, c+1, a))
    a = min(a, dp(n, number, x*n, c+1, a))
    a = min(a, dp(n, number, x/n, c+1, a))
    a = min(a, dp(n, number, int(str(n)+str(n)), c+2, a))
    a = min(a, dp(n, number, x+int(str(n)+str(n)), c+2, a))
    a = min(a, dp(n, number, x-int(str(n)+str(n)), c+2, a))
    a = min(a, dp(n, number, x*int(str(n)+str(n)), c+2, a))
    a = min(a, dp(n, number, x/int(str(n)+str(n)), c+2, a))
    a = min(a, dp(n, number, int(str(n)+str(n)+str(n)), c+3, a))
    a = min(a, dp(n, number, x+int(str(n)+str(n)+str(n)), c+3, a))
    a = min(a, dp(n, number, x-int(str(n)+str(n)+str(n)), c+3, a))
    a = min(a, dp(n, number, x*int(str(n)+str(n)+str(n)), c+3, a))
    a = min(a, dp(n, number, x/int(str(n)+str(n)+str(n)), c+3, a))
    a = min(a, dp(n, number, int(str(n)+str(n)+str(n)+str(n)), c+4, a))
    a = min(a, dp(n, number, x+int(str(n)+str(n)+str(n)+str(n)), c+4, a))
    a = min(a, dp(n, number, x-int(str(n)+str(n)+str(n)+str(n)), c+4, a))
    a = min(a, dp(n, number, x*int(str(n)+str(n)+str(n)+str(n)), c+4, a))
    a = min(a, dp(n, number, x/int(str(n)+str(n)+str(n)+str(n)), c+4, a))
    
    return a
    

def solution(n, number):
    answer = 0
    
    answer = dp(n, number, 0, 0, 9)

    if answer > 8:
        return -1
    return answer

print(solution(5, 110))
def binary(n):
    n_binary = ''
    while n != 1:
        n_binary = str(n % 2) + n_binary
        n = n // 2
    return '1' + n_binary

def solution(s):
    changed, zero_removed = 0, 0
    
    while True: 
        if s == '1':
            return [changed, zero_removed]
        zero_removed += s.count('0')
        s = s.replace('0','')
        s = binary(len(s))
        changed += 1
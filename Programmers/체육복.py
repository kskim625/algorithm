def solution(n, lost, reserve):
    
    lost.sort()
    reserve.sort()
    lost_temp = lost

    x = 0
    while x < len(reserve):
        if reserve[x] in lost_temp:
            lost_temp.remove(reserve[x])
            reserve.remove(reserve[x])
            x -= 1
        x += 1

    for i in range(len(reserve)):
        for j in range(len(lost_temp)):
            if reserve[i] - 1 in lost_temp:
                lost_temp.remove(reserve[i] - 1)
                break
            elif reserve[i] + 1 in lost_temp:
                lost_temp.remove(reserve[i] + 1)
                break
                
    return n - len(lost_temp)

def solution(n, lost, reserve):
    answer = 0
    
    c = [0] * (n+1)     # 0:수업 불가, 1:수업 가능
    for i in range(1, n+1):
        if i not in lost:
            c[i] = 1
        elif i in lost and i in reserve:
            c[i] = 1
            lost.remove(i)
            reserve.remove(i)
        elif i > 0 and i in lost and i-1 not in lost and i-1 in reserve:
            c[i] = 1
            lost.remove(i)
            reserve.remove(i-1)
        elif i < n and i in lost and i+1 not in lost and i+1 in reserve:
            c[i] = 1
            lost.remove(i)
            reserve.remove(i+1)
    answer = c.count(1)
    
    return answer
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
    print(n - len(lost_temp))
    return n - len(lost_temp)

solution(5, [2,3,4], [1,2,3])
#solution(5, [2,4], [1,3,5])
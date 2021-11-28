def solution(land):
    for i in range(1, len(land)):
        for j in range(4):
            if j == 0:
                land[i][j] += max(land[i-1][1:])
            elif j == 3:
                land[i][j] += max(land[i-1][:3])
            else:
                land[i][j] += max(land[i-1][:j] + land[i-1][j+1:])
    return max(land[len(land)-1])

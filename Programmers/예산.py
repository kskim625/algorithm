def solution(d, budget):
    answer = 0
    d = sorted(d)
    spent = 0
    for i in range(len(d)):
        spent += d[i]
        if spent > budget:
            break
        answer += 1
    return answer
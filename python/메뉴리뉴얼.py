def solution(orders, course):
    
    answer = []
    temp = []
    for i in range(len(orders)):
        temp.append(sorted(orders[i]))

    from itertools import combinations
    p = []
    for a in range(len(course)):
        for i in range(len(temp)):
            p += list(combinations(temp[i], course[a]))
        p += [0]

    from operator import itemgetter
    dic = {}
    t = ()
    temp = []
    for x in range(len(p)):
        if p[x] in dic:
            dic[p[x]] += 1
        else:
            dic[p[x]] = 1
        if p[x] == 0:
            t = sorted(dic.items(), key=itemgetter(1), reverse=True)
            maxcnt = t[0][1]
            if maxcnt < 2:
                t = ()
                dic = {}
                continue
            e = 0
            while t[e][1] == maxcnt:
                temp.append(t[e][0])
                e += 1
            f = 0
            while f < len(temp):
                strtemp = ''
                for g in range(len(temp[f])):
                    strtemp += temp[f][g]
                if strtemp not in answer:
                    answer.append(strtemp)
                f += 1
            dic = {}
            t = ()
            temp = []

    return sorted(answer)

print(solution(["XYZ", "XWY", "WXA"], [2,3,4]))
#print(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))
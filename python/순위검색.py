def solution(info, query):
    answer = [0] * len(query)

    information = []
    for i in range(len(info)):
        information = info[i].split(' ')
        information[len(information)-1] = int(information[len(information)-1])
        q = []
        for j in range(len(query)):
            q = query[j].split(' and ')
            temp, x = '', 0
            while x < len(q[len(q)-1]):
                if q[len(q)-1][x].isdigit():
                    temp += q[len(q)-1][x]
                x += 1
            q.append(int(temp))
            q[len(q)-2] = q[len(q)-2][:-len(temp)-1]
            count = 0
            for k in range(len(information)-1):
                if information[k] == q[k] or q[k] == '-':
                    count += 1
            if count == 4 and information[len(information)-1] >= q[len(q)-1]:
                answer[j] += 1

    return answer

print(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))
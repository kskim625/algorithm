def solution(n, k, cmd):
    answer = ''

    s = []
    for a in range(n):
        s.append(a)
    d = []
    ctrz = []
    ctrz_pos = 0
    move = 0
    pos = k
    for i in cmd:
        if i[0] == 'D':
            move = int(i[2])
            for j in range(len(d)):
                if d[j] > pos:
                    move += 1
            pos += move
        elif i[0] == 'U':
            move = -int(i[2])
            for j in range(len(d)):
                if d[j] < pos:
                    move -= 1
            pos += move
        elif i[0] == 'C':
            d.append(pos)
            if pos == len(s):
                pos = len(s)-1
            pos += 1
        elif i[0] == 'Z':
            if pos > d.pop():
                pos += 1
            
    for j in range(n):
        if j in d:
            answer += 'X'
        else:
            answer += 'O'

    return answer

print(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
print(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]))
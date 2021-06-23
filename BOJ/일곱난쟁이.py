dwarfs = []
for i in range(9):
    dwarfs.append(int(input()))

answer = []
appended = False
for a in range(9):
    for b in range(a+1, 9):
        for c in range(b+1, 9):
            for d in range(c+1, 9):
                for e in range(d+1, 9):
                    for f in range(e+1, 9):
                        for g in range(f+1, 9):
                            if dwarfs[a]+dwarfs[b]+dwarfs[c]+dwarfs[d]+dwarfs[e]+dwarfs[f]+dwarfs[g] == 100:
                                answer.append(dwarfs[a])
                                answer.append(dwarfs[b])
                                answer.append(dwarfs[c])
                                answer.append(dwarfs[d])
                                answer.append(dwarfs[e])
                                answer.append(dwarfs[f])
                                answer.append(dwarfs[g])
                                appended = True
                                break
                        if appended:
                            break
                    if appended:
                        break
                if appended:
                    break
            if appended:
                break
        if appended:
            break
    if appended:
        break
                        
answer = sorted(answer)
for j in range(len(answer)):
    print(answer[j])
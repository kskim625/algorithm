def solution(gems):
    answer = [0, 0]
    travel = 100000
    start = 0
    end = 100000
    gems_type = []
    for i in range(len(gems)):
        if gems[i] not in gems_type:
            gems_type.append(gems[i])

    # gems_type_tuple = tuple(gems_type)
    # for j in range(len(gems)):
    #     temp = list(gems_type_tuple)
    #     for k in range(j, len(gems)):
    #         if k - j >= travel:
    #             break
    #         if gems[k] in temp:
    #             temp.remove(gems[k])
    #         if temp == []:
    #             start = j
    #             end = k
    #             travel = k - j
    #             break
    # answer[0] = start + 1
    # answer[1] = end + 1

    

    print(answer)
    return answer

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
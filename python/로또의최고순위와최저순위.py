def solution(lottos, win_nums):
    answer = []
    rank = [6,5,4,3,2,1,6]

    zero_count = 0
    win = 0
    for i in lottos:
        if i in win_nums:
            win += 1
        elif i == 0:
            zero_count += 1
    
    answer.append(rank[win+zero_count-1])
    answer.append(rank[win-1])

    return answer

print(solution([0, 0, 0, 0, 0, 0], 	[38, 19, 20, 40, 15, 25]))
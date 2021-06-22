def solution(brown, yellow):
    answer = []
    
    s_list = []
    s = brown + yellow
    for i in range(1, s+1):
        if s % i == 0:
            s_list.append(i)
    
    for j in range(len(s_list)//2+1):
        if s_list[-j-1]*2 + s_list[j]*2 - 4 == brown:
            answer.append(s_list[-j-1])
            answer.append(s_list[j])
            break
    
    return answer
def solution(record):
    answer = []
    
    # 아래 loop 에서는 최종 아이디만 기록
    dict = {}
    for i in record:
        current = i.split(' ')
        if current[0] != 'Leave' :
            dict[current[1]] = current[2]
        
    # 아래 loop 에서는 결과 입력
    for j in record:
        current = j.split(' ')
        if current[0] == 'Enter':
            answer.append(dict[current[1]] + "님이 들어왔습니다.")
        elif current[0] == 'Leave':
            answer.append(dict[current[1]] + "님이 나갔습니다.")
    
    return answer
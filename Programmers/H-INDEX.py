def solution(citations):
    answer = 0
    
    i = 0
    while i < len(citations):
        temp = [x for x in citations if (x > i or x == i)]
        if len(temp) > answer:
            answer = i
        if i == len(citations) - 1 and len(temp) == len(citations):
            answer = len(citations)
        temp = []
        i += 1
    
    return answer